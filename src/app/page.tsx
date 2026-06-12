'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle2, Star, Heart, Flower2, Sparkles, Shield, Zap, ShoppingCart, Phone, MessageCircle, Award, Clock, Truck, Gift } from 'lucide-react'

const ADCUAN_TRACKING_URL = 'https://plus.adcuan.com/ctwa/704-6'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: '1'
  })

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = ADCUAN_TRACKING_URL
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Hero Section with New Aesthetic Design */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/pink-gradient.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-rose-50/60 to-white/40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 text-center sm:space-y-7 lg:text-left">
              <Badge className="mb-1 bg-gradient-to-r from-rose-600 to-pink-600 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:from-rose-700 hover:to-pink-700 sm:px-6 sm:text-sm">
                <Sparkles className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Best Seller 2024
              </Badge>
              <h1 className="text-[clamp(2.4rem,12vw,4.7rem)] font-bold leading-[1.06] text-gray-900 md:text-6xl lg:text-7xl">
                Kembali <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Wangi</span> &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Segar</span>
                <br />
                Seperti Gadis! ✨
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg md:text-2xl lg:mx-0">
                Solusi alami premium untuk mengatasi masalah keputihan, bau tidak sedap, dan kekeringan miss V. 
                Kembalikan kepercayaan diri dan keharmonisan rumah tangga Anda! 💕
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                <Button
                  size="lg"
                  className="h-12 w-full rounded-full bg-gradient-to-r from-rose-600 to-pink-600 px-6 text-base font-bold text-white shadow-xl shadow-rose-300/50 transition-all hover:from-rose-700 hover:to-pink-700 hover:shadow-rose-400/60 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ShoppingCart className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Pesan Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-2 border-rose-400 px-6 text-base font-bold text-rose-600 shadow-lg transition-all hover:border-rose-500 hover:bg-rose-50 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                  onClick={() => {
                    window.location.href = ADCUAN_TRACKING_URL
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Konsultasi Gratis
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 sm:gap-4 sm:pt-4">
                <div className="flex min-w-0 items-center justify-center gap-1 rounded-full bg-white/85 px-2 py-2 shadow-md backdrop-blur sm:gap-2 sm:px-4 sm:py-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600 sm:h-5 sm:w-5" />
                  <span className="truncate text-[11px] font-semibold text-gray-700 sm:text-sm">100% Alami</span>
                </div>
                <div className="flex min-w-0 items-center justify-center gap-1 rounded-full bg-white/85 px-2 py-2 shadow-md backdrop-blur sm:gap-2 sm:px-4 sm:py-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600 sm:h-5 sm:w-5" />
                  <span className="truncate text-[11px] font-semibold text-gray-700 sm:text-sm">Bahan Premium</span>
                </div>
                <div className="flex min-w-0 items-center justify-center gap-1 rounded-full bg-white/85 px-2 py-2 shadow-md backdrop-blur sm:gap-2 sm:px-4 sm:py-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-600 sm:h-5 sm:w-5" />
                  <span className="truncate text-[11px] font-semibold text-gray-700 sm:text-sm">Tanpa Efek Samping</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-rose-300/50 via-pink-300/40 to-purple-200/30 blur-3xl lg:inset-0 lg:rotate-3" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                <img
                  src="/novia-display.png"
                  alt="Femoire Novia - Suplemen Kesehatan Wanita Premium"
                  className="w-full rounded-2xl shadow-2xl transition-all duration-500 lg:hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 rounded-lg bg-gradient-to-r from-rose-600 to-pink-600 px-2.5 py-2 text-white shadow-xl sm:-bottom-5 sm:-right-5 sm:rounded-2xl sm:p-5 sm:shadow-2xl">
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <Award className="h-5 w-5 sm:h-10 sm:w-10" />
                    <div>
                      <p className="text-[9px] font-semibold leading-none opacity-90 sm:text-xs">Rating Produk</p>
                      <p className="text-sm font-bold leading-tight sm:text-2xl">4.9/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges with Enhanced Design */}
      <section className="bg-white px-4 py-8 shadow-lg sm:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-5 text-center sm:gap-8 md:grid-cols-4">
            <div className="group cursor-pointer">
              <div className="mx-auto mb-3 w-fit rounded-full bg-gradient-to-br from-rose-100 to-pink-100 p-3 shadow-lg transition-transform group-hover:scale-110 sm:p-4">
                <Shield className="h-6 w-6 text-rose-600 sm:h-7 sm:w-7" />
              </div>
              <span className="text-sm font-semibold text-gray-800">BPOM Terdaftar</span>
              <p className="text-xs text-gray-500 mt-1">Teruji & Aman</p>
            </div>
            <div className="group cursor-pointer">
              <div className="mx-auto mb-3 w-fit rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 p-3 shadow-lg transition-transform group-hover:scale-110 sm:p-4">
                <Star className="h-6 w-6 text-yellow-600 sm:h-7 sm:w-7" />
              </div>
              <span className="text-sm font-semibold text-gray-800">5.000+ Review</span>
              <p className="text-xs text-gray-500 mt-1">Rata-rata 4.9/5</p>
            </div>
            <div className="group cursor-pointer">
              <div className="mx-auto mb-3 w-fit rounded-full bg-gradient-to-br from-rose-100 to-pink-100 p-3 shadow-lg transition-transform group-hover:scale-110 sm:p-4">
                <Heart className="h-6 w-6 text-rose-600 sm:h-7 sm:w-7" />
              </div>
              <span className="text-sm font-semibold text-gray-800">10.000+ Pelanggan</span>
              <p className="text-xs text-gray-500 mt-1">Puas & Terbantu</p>
            </div>
            <div className="group cursor-pointer">
              <div className="mx-auto mb-3 w-fit rounded-full bg-gradient-to-br from-green-100 to-emerald-100 p-3 shadow-lg transition-transform group-hover:scale-110 sm:p-4">
                <Flower2 className="h-6 w-6 text-green-600 sm:h-7 sm:w-7" />
              </div>
              <span className="text-sm font-semibold text-gray-800">100% Bahan Alami</span>
              <p className="text-xs text-gray-500 mt-1">Tanpa Bahan Kimia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-to-b from-white via-rose-50 to-pink-50 px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Masalah Anda?</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Apakah Anda Mengalami Hal Ini?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Jangan biarkan masalah ini mengganggu keharmonisan rumah tangga dan kepercayaan diri Anda
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              { icon: '😔', title: 'Keputihan Berlebih', desc: 'Rasa tidak nyaman dan kurang percaya diri, aktivitas terganggu' },
              { icon: '🤢', title: 'Bau Tidak Sedap', desc: 'Membuat Anda malu dekat suami, kurang percaya diri' },
              { icon: '😣', title: 'Kekeringan Miss V', desc: 'Hubungan intim terasa menyakitkan dan tidak nyaman' },
              { icon: '😤', title: 'Mood Swing Berat', desc: 'Emosi tidak stabil, sering marah tanpa alasan jelas' },
              { icon: '😴', title: 'Siklus Haid Tidak Teratur', desc: 'Nyeri haid yang mengganggu aktivitas sehari-hari' },
              { icon: '😓', title: 'Kurang Bergairah', desc: 'Energi menurun, cepat lelah dan kurang semangat' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 shadow-lg transition-all duration-300 hover:border-rose-400 hover:shadow-2xl hover:-translate-y-2 group">
                <CardHeader className="px-3 pb-2 text-center sm:px-6 sm:pb-4">
                  <div className="mb-1.5 text-3xl transition-transform duration-300 group-hover:scale-110 sm:mb-3 sm:text-5xl">{item.icon}</div>
                  <CardTitle className="text-sm font-bold leading-tight text-gray-900 transition-colors group-hover:text-rose-600 sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 text-center sm:px-6">
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-base">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 px-4 py-12 text-white sm:px-6 sm:py-16 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/roses-bg.png')" }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-white text-rose-600 px-6 py-2 font-bold">Solusi Tepat</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl">
              Perkenalkan: Femoire Novia 💕
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-rose-100 sm:text-lg md:text-xl">
              Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan Anda
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-4 lg:gap-8">
            {[
              { icon: <Flower2 className="h-7 w-7 sm:h-10 sm:w-10" />, title: 'Atasi Keputihan', desc: 'Mengatasi keputihan berlebih dan bau tidak sedap secara efektif' },
              { icon: <Heart className="h-7 w-7 sm:h-10 sm:w-10" />, title: 'Kencangkan Otot', desc: 'Memperkuat otot rahim dan miss V untuk lebih percaya diri' },
              { icon: <Sparkles className="h-7 w-7 sm:h-10 sm:w-10" />, title: 'Seimbangkan Hormon', desc: 'Mengatur siklus menstruasi dan hormon tubuh secara alami' },
              { icon: <Zap className="h-7 w-7 sm:h-10 sm:w-10" />, title: 'Tingkatkan Energi', desc: 'Mengurangi stres dan meningkatkan vitalitas & stamina' }
            ].map((item, idx) => (
              <Card key={idx} className="border-white/30 bg-white/15 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/25 md:hover:scale-105">
                <CardHeader className="px-3 pb-2 text-center sm:px-6 sm:pb-4">
                  <div className="mx-auto mb-2 w-fit rounded-full bg-white/20 p-3 transition-colors hover:bg-white/30 sm:mb-3 sm:p-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-sm font-bold leading-tight text-white sm:text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-3 text-center sm:px-6">
                  <p className="text-xs leading-relaxed text-rose-100 sm:text-base">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Display Showcase */}
      <section className="bg-gradient-to-b from-white to-rose-50 px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Premium Quality</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Kualitas Premium untuk Wanita Modern
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Didesain khusus untuk wanita Indonesia dengan standar kualitas internasional
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-rose-200/50 to-pink-200/50 blur-3xl sm:inset-0 sm:rotate-6" />
            <div className="relative rounded-2xl bg-white p-3 shadow-xl sm:rounded-3xl sm:p-8 sm:shadow-2xl">
              <img
                src="/novia-product-display.png"
                alt="Femoire Novia Premium Product Display"
                className="w-full rounded-xl shadow-lg sm:rounded-2xl"
              />
              <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:mt-8 sm:gap-6 md:grid-cols-4">
                <div className="rounded-xl bg-rose-50 p-3 sm:p-4">
                  <Award className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Premium</p>
                  <p className="text-sm text-gray-600">Grade A</p>
                </div>
                <div className="rounded-xl bg-rose-50 p-3 sm:p-4">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Teruji</p>
                  <p className="text-sm text-gray-600">Laboratorium</p>
                </div>
                <div className="rounded-xl bg-rose-50 p-3 sm:p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Cepat</p>
                  <p className="text-sm text-gray-600">Hasil Terlihat</p>
                </div>
                <div className="rounded-xl bg-rose-50 p-3 sm:p-4">
                  <Heart className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Aman</p>
                  <p className="text-sm text-gray-600">Tanpa Efek Samping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Bahan Premium</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Bahan-Bahan Alami Premium
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Diproses dengan teknologi canggih untuk menjaga kualitas dan khasiat maksimal
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: 'Saffron Premium',
                desc: 'Antioksidan kuat, mengatur serotonin, meredakan gejala PMS, mengontrol emosi dan nafsu makan',
                highlight: 'Bahan Termahal di Dunia! 🌟',
                emoji: '💛'
              },
              {
                name: 'Manjakani',
                desc: 'Memperkuat otot rahim, mengurangi kekeringan vagina, merelaksasi otot miss V',
                highlight: 'Rahasianya Wanita Timur!',
                emoji: '🌿'
              },
              {
                name: 'Kacip Fatimah',
                desc: 'Mengatur siklus menstruasi, meredakan nyeri haid, mengontrol produksi hormon',
                highlight: 'Rempah Ajaib Malaysia!',
                emoji: '🌱'
              },
              {
                name: 'Maca',
                desc: 'Memperkuat tubuh, mengurangi stres, meningkatkan energi dan stamina',
                highlight: 'Superfood dari Peru!',
                emoji: '⚡'
              },
              {
                name: 'Pueraria Mirifica',
                desc: 'Mengatur estrogen, meredakan gejala PMS, menjaga kesehatan reproduksi',
                highlight: 'Rahasia Kecantikan Wanita Thailand!',
                emoji: '🌸'
              },
              {
                name: 'Fenugreek & Hops',
                desc: 'Meredakan kram, mood swing, insomnia, dan gejala menopause',
                highlight: 'Kombinasi Terbaik!',
                emoji: '🌾'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 transition-all duration-300 hover:border-rose-400 hover:shadow-2xl hover:-translate-y-2 group">
                <CardHeader className="px-3 pb-2 sm:px-6 sm:pb-4">
                  <div className="mb-2 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <span className="text-2xl sm:text-4xl">{item.emoji}</span>
                    <CardTitle className="text-base font-bold leading-tight text-gray-900 transition-colors group-hover:text-rose-600 sm:text-2xl">{item.name}</CardTitle>
                  </div>
                  <p className="text-xs font-semibold leading-snug text-rose-600 sm:text-base">{item.highlight}</p>
                </CardHeader>
                <CardContent className="px-3 sm:px-6">
                  <p className="text-xs leading-relaxed text-gray-600 sm:text-base">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-rose-50 via-pink-50 to-white px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Testimoni Nyata</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Apa Kata Mereka? 💬
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Ribuan wanita telah merasakan manfaat Femoire Novia dan puas dengan hasilnya
            </p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3 lg:gap-8">
            {[
              {
                name: 'Ibu Anisa, 35 th',
                city: 'Jakarta',
                rating: 5,
                text: 'Awalnya ragu, tapi setelah minum 2 minggu, keputihan berkurang drastis! Suami juga bilang saya lebih wangi dan percaya diri. Makasih Femoire Novia! 💕'
              },
              {
                name: 'Ibu Dewi, 38 th',
                city: 'Surabaya',
                rating: 5,
                text: 'Siklus haid jadi teratur, tidak lagi sakit saat datang bulan. Mood juga lebih stabil. Produk beneran bagus dan aman! 🌟'
              },
              {
                name: 'Ibu Ratna, 42 th',
                city: 'Bandung',
                rating: 5,
                text: 'Pasca melahirkan, miss V jadi kering. Setelah konsumsi Femoire Novia, masalah teratasi! Hubungan dengan suami jadi lebih harmonis. ✨'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base italic leading-relaxed text-gray-700 sm:text-lg">"{item.text}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center shadow-md">
                      <Heart className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.city}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Order Section */}
      <section id="order-section" className="bg-gradient-to-b from-white via-rose-50 to-pink-50 px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-rose-600 to-pink-600 px-5 py-2 font-bold text-white sm:px-6">Promo Terbatas</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Pesan Sekarang, Dapatkan Harga Spesial! 🎉
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              Stok terbatas, jangan sampai kehabisan! Pesan sekarang untuk mendapatkan harga promo
            </p>
          </div>

          <div className="mb-12 grid gap-5 sm:gap-6 md:mb-16 md:grid-cols-3 lg:gap-8">
            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-gray-900 sm:text-2xl">Paket Hemat</CardTitle>
                <CardDescription className="text-base">1 Botol</CardDescription>
                <div className="mt-6">
                  <span className="block text-3xl font-bold leading-tight text-rose-600 sm:text-4xl">Rp 349.000</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">60 Kapsul</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Untuk 30 Hari</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Truck className="w-5 h-5 text-rose-600" />
                    <span className="font-medium">Gratis Ongkir</span>
                  </li>
                </ul>
                <Button
                  className="h-12 w-full rounded-full bg-gray-200 font-bold text-gray-900 shadow-md hover:bg-gray-300 sm:h-14"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '1' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-4 border-rose-500 shadow-2xl transition-all duration-300 md:hover:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-rose-600 to-pink-600 px-5 py-2 text-sm font-bold text-white shadow-lg sm:px-6 sm:text-base">
                  POPULER ✨
                </Badge>
              </div>
              <CardHeader className="text-center pb-6 bg-gradient-to-b from-rose-50 to-white rounded-t-lg">
                <CardTitle className="text-xl font-bold text-gray-900 sm:text-2xl">Paket Super</CardTitle>
                <CardDescription className="text-base">2 Botol</CardDescription>
                <div className="mt-6">
                  <span className="block text-base text-gray-400 line-through sm:text-xl">Rp 698.000</span>
                  <span className="block text-3xl font-bold leading-tight text-rose-600 sm:text-4xl">Rp 599.000</span>
                </div>
                <p className="text-base text-green-600 font-bold mt-2">Hemat Rp 99.000! 💰</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">120 Kapsul</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Untuk 60 Hari</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Truck className="w-5 h-5 text-rose-600" />
                    <span className="font-medium">Gratis Ongkir</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Gift className="w-5 h-5 text-rose-600" />
                    <span className="font-medium text-rose-600">Bonus E-Book Kesehatan!</span>
                  </li>
                </ul>
                <Button
                  className="h-12 w-full rounded-full bg-gradient-to-r from-rose-600 to-pink-600 font-bold text-white shadow-lg shadow-rose-300/50 hover:from-rose-700 hover:to-pink-700 sm:h-14"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '2' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-xl font-bold text-gray-900 sm:text-2xl">Paket Sultan</CardTitle>
                <CardDescription className="text-base">3 Botol</CardDescription>
                <div className="mt-6">
                  <span className="block text-base text-gray-400 line-through sm:text-xl">Rp 1.047.000</span>
                  <span className="block text-3xl font-bold leading-tight text-rose-600 sm:text-4xl">Rp 849.000</span>
                </div>
                <p className="text-base text-green-600 font-bold mt-2">Hemat Rp 198.000! 💰</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-3 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">180 Kapsul</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-medium">Untuk 90 Hari</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Truck className="w-5 h-5 text-rose-600" />
                    <span className="font-medium">Gratis Ongkir Prioritas</span>
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <Gift className="w-5 h-5 text-rose-600" />
                    <span className="font-medium text-rose-600">Bonus E-Book + Konsultasi!</span>
                  </li>
                </ul>
                <Button
                  className="h-12 w-full rounded-full bg-gray-200 font-bold text-gray-900 shadow-md hover:bg-gray-300 sm:h-14"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '3' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <Card id="order-form" className="border-2 border-rose-200 shadow-2xl sm:border-[3px]">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 pb-6 sm:pb-8">
              <CardTitle className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">Formulir Pemesanan</CardTitle>
              <CardDescription className="pt-2 text-center text-sm leading-relaxed sm:text-base">Isi data diri Anda, kami akan segera menghubungi untuk konfirmasi</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 sm:pt-8">
              <form onSubmit={handleOrder} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-base focus:border-rose-500 focus:ring-2 focus:ring-rose-500 sm:px-5 sm:py-4 sm:text-lg"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-base focus:border-rose-500 focus:ring-2 focus:ring-rose-500 sm:px-5 sm:py-4 sm:text-lg"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Alamat Lengkap *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="min-h-28 w-full rounded-xl border-2 border-gray-300 px-4 py-3 text-base focus:border-rose-500 focus:ring-2 focus:ring-rose-500 sm:min-h-32 sm:px-5 sm:py-4 sm:text-lg"
                    placeholder="Masukkan alamat lengkap pengiriman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Jumlah Botol *
                  </label>
                  <select
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-rose-500 focus:ring-2 focus:ring-rose-500 sm:px-5 sm:py-4 sm:text-lg"
                  >
                    <option value="1">1 Botol - Rp 349.000</option>
                    <option value="2">2 Botol - Rp 599.000 (Hemat Rp 99.000)</option>
                    <option value="3">3 Botol - Rp 849.000 (Hemat Rp 198.000)</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-base font-bold text-white shadow-xl shadow-green-300/50 transition-all hover:from-green-700 hover:to-emerald-700 hover:shadow-green-400/60 sm:h-14 sm:text-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
                  Kirim Pesanan via WhatsApp
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-6 text-center leading-relaxed">
                📝 Data Anda aman dan hanya digunakan untuk keperluan pengiriman
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center sm:mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">FAQ</Badge>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 md:text-5xl">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Berapa lama hasilnya akan terlihat?',
                a: 'Hasil bervariasi pada setiap individu. Sebagian besar pelanggan merasakan perubahan dalam 1-2 minggu pemakaian rutin. Untuk hasil maksimal, disarankan konsumsi minimal 1-2 bulan.'
              },
              {
                q: 'Apakah Femoire Novia aman dikonsumsi?',
                a: 'Ya, Femoire Novia terbuat dari 100% bahan alami berkualitas premium dan telah terdaftar BPOM. Namun, wanita hamil dan menyusui disarankan berkonsultasi dengan dokter terlebih dahulu.'
              },
              {
                q: 'Bagaimana cara konsumsinya?',
                a: 'Konsumsi 2 kapsul sehari, 1 kapsul pagi dan 1 kapsul malam setelah makan. Disarankan minum air putih yang cukup untuk hasil maksimal.'
              },
              {
                q: 'Apakah ada efek samping?',
                a: 'Femoire Novia tidak memiliki efek samping berbahaya karena terbuat dari bahan alami. Namun, jika Anda memiliki kondisi medis tertentu atau sedang minum obat dokter, sebaiknya konsultasi terlebih dahulu.'
              },
              {
                q: 'Bagaimana cara pembayarannya?',
                a: 'Pembayaran dapat dilakukan melalui transfer bank (BCA, Mandiri, BRI) atau e-wallet (GoPay, OVO, Dana). Detail pembayaran akan dikirimkan via WhatsApp setelah Anda mengisi formulir pemesanan.'
              },
              {
                q: 'Berapa lama pengirimannya?',
                a: 'Pengiriman reguler membutuhkan 2-4 hari kerja untuk Jabodetabek dan 3-7 hari kerja untuk luar Jabodetabek. Pengiriman prioritas tersedia dengan tambahan biaya.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="rounded-xl border-2 border-rose-100 px-4 transition-colors hover:border-rose-200 sm:px-6">
                <AccordionTrigger className="py-4 text-left text-base font-semibold text-gray-900 sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed py-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 px-4 py-12 text-white sm:px-6 sm:py-16 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/roses-bg.png')" }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:mb-6 md:text-5xl">
            Jangan Tunda Lagi! 💕
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-rose-100 sm:text-lg md:mb-10 md:text-xl">
            Kembalikan kepercayaan diri dan keharmonisan rumah tangga Anda sekarang juga. 
            Stok terbatas, pesan sebelum kehabisan!
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="h-12 w-full rounded-full bg-white px-6 text-base font-bold text-rose-600 shadow-2xl shadow-rose-900/30 transition-all hover:bg-rose-50 hover:shadow-rose-900/50 sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
              onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-2 border-white px-6 text-base font-bold text-white shadow-xl transition-all hover:bg-white/20 sm:h-14 sm:w-auto sm:px-10 sm:text-lg"
              onClick={() => {
                window.location.href = ADCUAN_TRACKING_URL
              }}
            >
              <Phone className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-b from-gray-900 to-gray-950 px-4 py-10 text-white sm:px-6 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 grid gap-8 md:mb-12 md:grid-cols-3 md:gap-12">
            <div>
              <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">Femoire Novia</h3>
              <p className="text-gray-400 leading-relaxed">
                Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan dan mengembalikan kepercayaan diri.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">Hubungi Kami</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-rose-400" />
                  <span className="text-base">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-rose-400" />
                  <span className="text-base">WhatsApp: +62 812-3456-7890</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">Informasi</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-rose-400" />
                  <span className="text-base">BPOM Terdaftar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-rose-400" />
                  <span className="text-base">100% Bahan Alami</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-rose-400" />
                  <span className="text-base">Garansi Produk Asli</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Femoire Novia. Semua hak dilindungi.</p>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed max-w-2xl mx-auto">
              Disclaimer: Hasil yang didapatkan dapat bervariasi pada setiap individu. Produk ini bukan pengganti obat dokter dan tidak dimaksudkan untuk mendiagnosis, mengobati, menyembuhkan, atau mencegah penyakit apapun.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={ADCUAN_TRACKING_URL}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white shadow-2xl shadow-green-300/50 transition-all duration-300 hover:scale-110 hover:from-green-700 hover:to-emerald-700 sm:bottom-8 sm:right-8 sm:p-5"
      >
        <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8" />
      </a>
    </div>
  )
}
