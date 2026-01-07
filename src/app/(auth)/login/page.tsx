"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
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
import { AlertCircle, Eye, EyeOff, Lock, Mail } from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export default function LoginPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {
    const e: Record<string, string> = {};

    if (!formData.email.trim()) {
      e.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      e.email = "Format email tidak valid";
    }

    if (!formData.password) {
      e.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      e.password = "Password minimal 6 karakter";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------------- reCAPTCHA v3 ---------------- */

  const executeRecaptcha = async (): Promise<string | null> => {
    if (!window.grecaptcha) return null;

    await window.grecaptcha.ready();

    return await window.grecaptcha.execute(
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      { action: "login" }
    );
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setCaptchaError("");

    if (!validateForm()) return;

    const captchaToken = await executeRecaptcha();
    if (!captchaToken) {
      setCaptchaError("reCAPTCHA gagal dijalankan. Coba refresh halaman.");
      return;
    }

    setIsLoading(true);

    /**
     * KIRIM KE BACKEND:
     * - email
     * - password
     * - captchaToken
     */

    console.log("CAPTCHA TOKEN:", captchaToken);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 1200);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) {
      setErrors((p) => ({ ...p, [field]: "" }));
    }
  };

  return (
    <>
      {/* LOAD reCAPTCHA v3 SCRIPT */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <section className="min-h-screen bg-background py-16">
        <div className="max-w-md mx-auto px-6">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="text-center">
              <Image
                src="/images/image.png"
                alt="DPMPTSP"
                width={96}
                height={96}
                className="mx-auto"
              />
              <CardTitle className="text-2xl font-bold">
                Masuk ke Akun Anda
              </CardTitle>
              <CardDescription>
                Silakan login untuk mengakses layanan
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* EMAIL */}
                <div>
                  <Label className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleChange("email", e.target.value)
                    }
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <Label className="flex items-center gap-2">
                    <Lock className="w-4 h-4" /> Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        handleChange("password", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* CAPTCHA ERROR */}
                {captchaError && (
                  <p className="text-xs text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {captchaError}
                  </p>
                )}

                {/* REMEMBER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={formData.remember}
                      onCheckedChange={(v) =>
                        handleChange("remember", v as boolean)
                      }
                    />
                    <Label>Ingat saya</Label>
                  </div>
                  <Link
                    href="/lupa-password"
                    className="text-sm text-blue-600"
                  >
                    Lupa password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? "Memproses..." : "Masuk"}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="text-center text-sm">
              Belum punya akun?{" "}
              <Link href="/register" className="text-blue-600">
                Daftar
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
