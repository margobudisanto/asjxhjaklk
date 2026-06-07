'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle2, Star, Heart, Flower2, Sparkles, Shield, Zap, ShoppingCart, Phone, MessageCircle, Award, Clock, Truck, Gift } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: '1'
  })

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Halo, saya ingin memesan Femoire Novia.%0A%0A📋 Detail Pesanan:%0A• Nama: ${formData.name}%0A• No. HP: ${formData.phone}%0A• Alamat: ${formData.address}%0A• Jumlah: ${formData.quantity} botol%0A%0AMohon info pembayaran dan pengiriman. Terima kasih!`
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white">
      {/* Hero Section with New Aesthetic Design */}
      <section className="relative overflow-hidden py-16 md:py-24 px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/pink-gradient.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-rose-50/60 to-white/40" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <Badge className="mb-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Best Seller 2024
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Kembali <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Wangi</span> &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Segar</span>
                <br />
                Seperti Gadis! ✨
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Solusi alami premium untuk mengatasi masalah keputihan, bau tidak sedap, dan kekeringan miss V. 
                Kembalikan kepercayaan diri dan keharmonisan rumah tangga Anda! 💕
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-rose-300/50 transition-all hover:scale-105 hover:shadow-rose-400/60"
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ShoppingCart className="w-6 h-6 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-3 border-rose-400 text-rose-600 hover:bg-rose-50 hover:border-rose-500 px-10 py-7 text-xl font-bold rounded-full shadow-lg transition-all hover:scale-105"
                  onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang Femoire Novia', '_blank')}
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Konsultasi Gratis
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">100% Alami</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Bahan Premium</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-3 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">Tanpa Efek Samping</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/50 via-pink-300/40 to-purple-200/30 rounded-3xl blur-3xl transform rotate-3" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
                <img
                  src="/femoire-hero.png"
                  alt="Femoire Novia - Suplemen Kesehatan Wanita Premium"
                  className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Award className="w-10 h-10" />
                    <div>
                      <p className="text-xs opacity-90">Rating Produk</p>
                      <p className="text-2xl font-bold">4.9/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges with Enhanced Design */}
      <section className="py-12 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform shadow-lg">
                <Shield className="w-7 h-7 text-rose-600" />
              </div>
              <span className="text-sm font-semibold text-gray-800">BPOM Terdaftar</span>
              <p className="text-xs text-gray-500 mt-1">Teruji & Aman</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform shadow-lg">
                <Star className="w-7 h-7 text-yellow-600" />
              </div>
              <span className="text-sm font-semibold text-gray-800">5.000+ Review</span>
              <p className="text-xs text-gray-500 mt-1">Rata-rata 4.9/5</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="w-7 h-7 text-rose-600" />
              </div>
              <span className="text-sm font-semibold text-gray-800">10.000+ Pelanggan</span>
              <p className="text-xs text-gray-500 mt-1">Puas & Terbantu</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-full p-4 mb-3 mx-auto w-fit group-hover:scale-110 transition-transform shadow-lg">
                <Flower2 className="w-7 h-7 text-green-600" />
              </div>
              <span className="text-sm font-semibold text-gray-800">100% Bahan Alami</span>
              <p className="text-xs text-gray-500 mt-1">Tanpa Bahan Kimia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white via-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Masalah Anda?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apakah Anda Mengalami Hal Ini?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jangan biarkan masalah ini mengganggu keharmonisan rumah tangga dan kepercayaan diri Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '😔', title: 'Keputihan Berlebih', desc: 'Rasa tidak nyaman dan kurang percaya diri, aktivitas terganggu' },
              { icon: '🤢', title: 'Bau Tidak Sedap', desc: 'Membuat Anda malu dekat suami, kurang percaya diri' },
              { icon: '😣', title: 'Kekeringan Miss V', desc: 'Hubungan intim terasa menyakitkan dan tidak nyaman' },
              { icon: '😤', title: 'Mood Swing Berat', desc: 'Emosi tidak stabil, sering marah tanpa alasan jelas' },
              { icon: '😴', title: 'Siklus Haid Tidak Teratur', desc: 'Nyeri haid yang mengganggu aktivitas sehari-hari' },
              { icon: '😓', title: 'Kurang Bergairah', desc: 'Energi menurun, cepat lelah dan kurang semangat' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 hover:border-rose-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 group">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/roses-bg.png')" }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-rose-600 px-6 py-2 font-bold">Solusi Tepat</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perkenalkan: Femoire Novia 💕
            </h2>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Flower2 className="w-10 h-10" />, title: 'Atasi Keputihan', desc: 'Mengatasi keputihan berlebih dan bau tidak sedap secara efektif' },
              { icon: <Heart className="w-10 h-10" />, title: 'Kencangkan Otot', desc: 'Memperkuat otot rahim dan miss V untuk lebih percaya diri' },
              { icon: <Sparkles className="w-10 h-10" />, title: 'Seimbangkan Hormon', desc: 'Mengatur siklus menstruasi dan hormon tubuh secara alami' },
              { icon: <Zap className="w-10 h-10" />, title: 'Tingkatkan Energi', desc: 'Mengurangi stres dan meningkatkan vitalitas & stamina' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/15 backdrop-blur-sm border-white/30 text-white hover:bg-white/25 transition-all duration-300 hover:scale-105 shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-3 hover:bg-white/30 transition-colors">
                    {item.icon}
                  </div>
                  <CardTitle className="text-white text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-rose-100 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Display Showcase */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Premium Quality</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kualitas Premium untuk Wanita Modern
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didesain khusus untuk wanita Indonesia dengan standar kualitas internasional
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-200/50 to-pink-200/50 rounded-3xl blur-3xl transform rotate-6" />
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img
                src="/femoire-display.png"
                alt="Femoire Novia Premium Product Display"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-rose-50 rounded-xl">
                  <Award className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Premium</p>
                  <p className="text-sm text-gray-600">Grade A</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Teruji</p>
                  <p className="text-sm text-gray-600">Laboratorium</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-rose-600" />
                  <p className="font-bold text-gray-900">Cepat</p>
                  <p className="text-sm text-gray-600">Hasil Terlihat</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-xl">
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
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Bahan Premium</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bahan-Bahan Alami Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diproses dengan teknologi canggih untuk menjaga kualitas dan khasiat maksimal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card key={idx} className="border-2 border-rose-100 hover:border-rose-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{item.emoji}</span>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-rose-600 transition-colors">{item.name}</CardTitle>
                  </div>
                  <p className="text-base font-semibold text-rose-600">{item.highlight}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-rose-50 via-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">Testimoni Nyata</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata Mereka? 💬
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ribuan wanita telah merasakan manfaat Femoire Novia dan puas dengan hasilnya
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <p className="text-gray-700 italic text-lg leading-relaxed">"{item.text}"</p>
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
      <section id="order-section" className="py-20 md:py-28 px-4 bg-gradient-to-b from-white via-rose-50 to-pink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 font-bold">Promo Terbatas</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pesan Sekarang, Dapatkan Harga Spesial! 🎉
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stok terbatas, jangan sampai kehabisan! Pesan sekarang untuk mendapatkan harga promo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-gray-900 font-bold">Paket Hemat</CardTitle>
                <CardDescription className="text-base">1 Botol</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-rose-600">Rp 349.000</span>
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
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-6 rounded-full shadow-md"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '1' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-rose-500 shadow-2xl relative transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 text-base font-bold shadow-lg">
                  POPULER ✨
                </Badge>
              </div>
              <CardHeader className="text-center pb-6 bg-gradient-to-b from-rose-50 to-white rounded-t-lg">
                <CardTitle className="text-2xl text-gray-900 font-bold">Paket Super</CardTitle>
                <CardDescription className="text-base">2 Botol</CardDescription>
                <div className="mt-6">
                  <span className="text-xl text-gray-400 line-through">Rp 698.000</span>
                  <span className="text-4xl font-bold text-rose-600 ml-2">Rp 599.000</span>
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
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold py-6 rounded-full shadow-lg shadow-rose-300/50"
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
                <CardTitle className="text-2xl text-gray-900 font-bold">Paket Sultan</CardTitle>
                <CardDescription className="text-base">3 Botol</CardDescription>
                <div className="mt-6">
                  <span className="text-xl text-gray-400 line-through">Rp 1.047.000</span>
                  <span className="text-4xl font-bold text-rose-600 ml-2">Rp 849.000</span>
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
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-6 rounded-full shadow-md"
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
          <Card id="order-form" className="border-3 border-rose-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50 pb-8">
              <CardTitle className="text-3xl text-gray-900 text-center font-bold">Formulir Pemesanan</CardTitle>
              <CardDescription className="text-center text-base pt-2">Isi data diri Anda, kami akan segera menghubungi untuk konfirmasi</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <form onSubmit={handleOrder} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-lg"
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
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-lg"
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
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-lg min-h-32"
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
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-lg bg-white"
                  >
                    <option value="1">1 Botol - Rp 349.000</option>
                    <option value="2">2 Botol - Rp 599.000 (Hemat Rp 99.000)</option>
                    <option value="3">3 Botol - Rp 849.000 (Hemat Rp 198.000)</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-xl font-bold rounded-full shadow-xl shadow-green-300/50 hover:shadow-green-400/60 transition-all"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
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
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-rose-100 text-rose-700 px-4 py-2 font-semibold">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-rose-100 rounded-xl px-6 hover:border-rose-200 transition-colors">
                <AccordionTrigger className="text-left font-semibold text-gray-900 text-lg py-4">
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
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-500 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/roses-bg.png')" }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jangan Tunda Lagi! 💕
          </h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kembalikan kepercayaan diri dan keharmonisan rumah tangga Anda sekarang juga. 
            Stok terbatas, pesan sebelum kehabisan!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 px-12 py-7 text-xl font-bold rounded-full shadow-2xl shadow-rose-900/30 hover:shadow-rose-900/50 transition-all hover:scale-105"
              onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart className="w-6 h-6 mr-3" />
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-3 border-white text-white hover:bg-white/20 px-12 py-7 text-xl font-bold rounded-full shadow-xl transition-all hover:scale-105"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang Femoire Novia', '_blank')}
            >
              <Phone className="w-6 h-6 mr-3" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Femoire Novia</h3>
              <p className="text-gray-400 leading-relaxed">
                Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan dan mengembalikan kepercayaan diri.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
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
              <h3 className="text-2xl font-bold mb-4">Informasi</h3>
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
        href="https://wa.me/6281234567890?text=Halo, saya ingin memesan Femoire Novia"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-5 rounded-full shadow-2xl shadow-green-300/50 hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}