"use client";

import { useState, type FormEvent } from "react";
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
import {
  AlertCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  Building,
  IdCard,
} from "lucide-react";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    nik: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    agreeDataProcessing: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validasi Nama Lengkap
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi";
    }

    // Validasi Email
    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // Validasi Nomor Telepon
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Nomor telepon wajib diisi";
    } else if (!/^[0-9+\-\s()]{10,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Format nomor telepon tidak valid";
    }

    // Validasi Nama Perusahaan
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Nama perusahaan wajib diisi";
    }

    // Validasi NIK
    if (!formData.nik.trim()) {
      newErrors.nik = "NIK wajib diisi";
    } else if (!/^[0-9]{16}$/.test(formData.nik)) {
      newErrors.nik = "NIK harus 16 digit angka";
    }

    // Validasi Password
    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password minimal 8 karakter";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password harus mengandung huruf besar, huruf kecil, dan angka";
    }

    // Validasi Konfirmasi Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Konfirmasi password wajib diisi";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password tidak cocok";
    }

    // Validasi Persetujuan
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Anda harus menyetujui Syarat & Ketentuan";
    }
    if (!formData.agreeDataProcessing) {
      newErrors.agreeDataProcessing = "Anda harus menyetujui Pemrosesan Data";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulasi API call untuk registrasi
    setTimeout(() => {
      setIsLoading(false);
      // Redirect ke halaman verifikasi email
      router.push("/verifikasi-email");
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="w-full py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="max-w-2xl mx-auto mt-10">
          <Card className="border shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/image.png"
                  alt="DPMPTSP Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Buat Akun Baru
              </CardTitle>
              <CardDescription className="text-gray-600">
                Daftarkan diri Anda untuk mengakses layanan perizinan dan
                investasi
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama Lengkap */}
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="text-gray-700 flex items-center gap-2"
                  >
                    <User className="w-4 h-4" />
                    Nama Lengkap *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Masukkan nama lengkap sesuai KTP"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className={`bg-white ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                    disabled={isLoading}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Email dan Nomor Telepon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`bg-white ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phoneNumber"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Nomor Telepon *
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="0812-3456-7890"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      className={`bg-white ${
                        errors.phoneNumber ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-red-500">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Nama Perusahaan dan NIK */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="companyName"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <Building className="w-4 h-4" />
                      Nama Perusahaan *
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      placeholder="Nama perusahaan Anda"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                      }
                      className={`bg-white ${
                        errors.companyName ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-500">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="nik"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <IdCard className="w-4 h-4" />
                      NIK (Nomor Induk Kependudukan) *
                    </Label>
                    <Input
                      id="nik"
                      type="text"
                      placeholder="16 digit angka NIK"
                      value={formData.nik}
                      onChange={(e) => handleInputChange("nik", e.target.value)}
                      className={`bg-white ${
                        errors.nik ? "border-red-500" : ""
                      }`}
                      disabled={isLoading}
                      maxLength={16}
                    />
                    {errors.nik && (
                      <p className="text-xs text-red-500">{errors.nik}</p>
                    )}
                  </div>
                </div>

                {/* Password dan Konfirmasi Password */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="Minimal 8 karakter"
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
                    <p className="text-xs text-gray-500 mt-1">
                      Harus mengandung huruf besar, huruf kecil, dan angka
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="confirmPassword"
                      className="text-gray-700 flex items-center gap-2"
                    >
                      <Lock className="w-4 h-4" />
                      Konfirmasi Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Ulangi password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className={`bg-white pr-10 ${
                          errors.confirmPassword ? "border-red-500" : ""
                        }`}
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                {/* Persetujuan */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreeTerms", checked as boolean)
                      }
                      disabled={isLoading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="agreeTerms"
                      className="text-xs font-normal text-gray-600 cursor-pointer leading-tight"
                    >
                      Saya menyetujui{" "}
                      <Link
                        href="/syarat-ketentuan"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        target="_blank"
                      >
                        Syarat & Ketentuan
                      </Link>
                    </Label>
                  </div>
                  {errors.agreeTerms && (
                    <p className="text-xs text-red-500 ml-6">
                      {errors.agreeTerms}
                    </p>
                  )}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeDataProcessing"
                      checked={formData.agreeDataProcessing}
                      onCheckedChange={(checked) =>
                        handleInputChange(
                          "agreeDataProcessing",
                          checked as boolean
                        )
                      }
                      disabled={isLoading}
                      className="mt-1"
                    />
                    <Label
                      htmlFor="agreeDataProcessing"
                      className="text-xs font-normal text-gray-600 cursor-pointer leading-tight"
                    >
                      Saya menyetujui pemrosesan data pribadi sesuai dengan{" "}
                      <Link
                        href="/kebijakan-privasi"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        target="_blank"
                      >
                        Kebijakan Privasi
                      </Link>
                    </Label>
                  </div>
                  {errors.agreeDataProcessing && (
                    <p className="text-xs text-red-500 ml-6">
                      {errors.agreeDataProcessing}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Membuat Akun...
                    </>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
              <div className="text-center text-sm text-gray-600">
                Sudah memiliki akun?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Masuk di sini
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
