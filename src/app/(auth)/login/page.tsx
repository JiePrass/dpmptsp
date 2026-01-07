"use client";

import { useState, type FormEvent, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Eye, EyeOff, Lock, Mail, User, RefreshCw } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string>("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const [captchaError, setCaptchaError] = useState<string>("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize reCAPTCHA
  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    
    window.onRecaptchaLoad = () => {
      setCaptchaReady(true);
    };
    
    script.onload = () => {
      if (window.onRecaptchaLoad) {
        window.onRecaptchaLoad();
      }
    };
    
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
    }

    // CAPTCHA validation
    if (!captchaToken) {
      setCaptchaError("Harap verifikasi bahwa Anda bukan robot");
    } else {
      setCaptchaError("");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && captchaToken !== "";
  };

  const executeRecaptcha = async () => {
    if (!window.grecaptcha || !window.grecaptcha.ready) {
      setCaptchaError("reCAPTCHA sedang dimuat, coba lagi dalam beberapa detik");
      return false;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LcDkqYpAAAAAK7m_z-K6jRRYbS3iQ78QnW2W2S_",
        { action: "login" }
      );
      
      setCaptchaToken(token);
      setCaptchaError("");
      return true;
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      setCaptchaError("Gagal memverifikasi reCAPTCHA. Silakan coba lagi.");
      return false;
    }
  };

  const resetCaptcha = () => {
    setCaptchaToken("");
    if (window.grecaptcha && window.grecaptcha.reset) {
      window.grecaptcha.reset();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Execute reCAPTCHA first
    if (!captchaToken) {
      const captchaSuccess = await executeRecaptcha();
      if (!captchaSuccess) {
        setCaptchaError("Harap verifikasi reCAPTCHA terlebih dahulu");
        return;
      }
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulasi API call dengan CAPTCHA verification
    setTimeout(() => {
      // In production, you would verify the captchaToken with your backend
      console.log("CAPTCHA Token:", captchaToken);
      
      // Reset CAPTCHA after successful login
      resetCaptcha();
      
      setIsLoading(false);
      // Redirect ke dashboard atau halaman sebelumnya
      router.push("/dashboard");
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="w-full py-16 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="max-w-md mx-auto">
          <Card className="border shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/image.png"
                  alt="DPMPTSP Logo"
                  width={96}
                  height={96}
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Masuk ke Akun Anda
              </CardTitle>
              <CardDescription className="text-gray-600">
                Selamat datang kembali! Silakan masuk untuk mengakses layanan perizinan
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              {/* Demo Account Alert */}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@contoh.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-white ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Password *
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Masukkan password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className={`bg-white pr-10 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>

                {/* CAPTCHA Section */}
                <div className="space-y-2">
                  <Label className="text-gray-700">
                    Verifikasi Keamanan *
                  </Label>
                  <div className="p-4 border rounded-lg bg-gray-50">
                    {captchaReady ? (
                      <>
                        <div 
                          className="g-recaptcha" 
                          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LcDkqYpAAAAAK7m_z-K6jRRYbS3iQ78QnW2W2S_"}
                          data-callback="onRecaptchaSuccess"
                          data-size="normal"
                          id="recaptcha-container"
                        />
                        {captchaToken && (
                          <div className="mt-2 flex items-center text-green-600 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>Verifikasi berhasil</span>
                            <button
                              type="button"
                              onClick={resetCaptcha}
                              className="ml-2 text-blue-600 hover:text-blue-800 text-xs flex items-center"
                              disabled={isLoading}
                            >
                              <RefreshCw className="w-3 h-3 mr-1" />
                              Verifikasi ulang
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center justify-center py-4">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-2"></div>
                        <span className="text-gray-600">Memuat reCAPTCHA...</span>
                      </div>
                    )}
                    {captchaError && (
                      <p className="text-xs text-red-500 mt-2">{captchaError}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      reCAPTCHA melindungi website ini dari spam dan penyalahgunaan
                    </p>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.remember}
                      onCheckedChange={(checked) =>
                        handleInputChange("remember", checked as boolean)
                      }
                      disabled={isLoading}
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal text-gray-600 cursor-pointer"
                    >
                      Ingat saya
                    </Label>
                  </div>

                  <Link
                    href="/lupa-password"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Lupa password?
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading || (!captchaToken && captchaReady)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Memproses...
                    </>
                  ) : (
                    "Masuk"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
              <div className="text-center text-sm text-gray-600">
                Belum memiliki akun?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Daftar sekarang
                </Link>
              </div>
            </CardFooter>
          </Card>

          {/* Info Box */}
          <Card className="border border-blue-200 shadow-sm rounded-2xl overflow-hidden mt-6 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Keamanan Login
              </h3>
              <ul className="text-blue-700 space-y-2 text-sm">
                <li>• Kami menggunakan reCAPTCHA untuk mencegah login otomatis</li>
                <li>• Data login Anda dilindungi dengan enkripsi</li>
                <li>• Jangan berikan password Anda kepada siapapun</li>
                <li>
                  • Hubungi call center (0251) 8356167 jika mengalami masalah login
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Inline JavaScript untuk reCAPTCHA callback */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function onRecaptchaSuccess(token) {
              if (window.handleCaptchaSuccess) {
                window.handleCaptchaSuccess(token);
              }
            }
          `,
        }}
      />
    </section>
  );
}