'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle2, Star, Heart, Flower2, Sparkles, Shield, Zap, ShoppingCart, Phone, MessageCircle } from 'lucide-react'

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
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-pink-50/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-rose-600 hover:bg-rose-700 text-white px-4 py-1 text-sm font-medium">
                <Sparkles className="w-3 h-3 mr-1" />
                Best Seller 2024
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Kembali <span className="text-rose-600">Wangi</span> &{' '}
                <span className="text-rose-600">Segar</span>
                Seperti Gadis!
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Solusi alami untuk mengatasi masalah keputihan, bau tidak sedap, dan kekeringan miss V. 
                Kembalikan kepercayaan diri Anda bersama suami tercinta! 💕
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-rose-300 transition-all hover:scale-105"
                  onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg font-semibold rounded-full"
                  onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang Femoire Novia', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4 justify-center md:justify-start text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                  <span>100% Alami</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                  <span>Bahan Premium</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-1" />
                  <span>Tanpa Efek Samping</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300/40 to-pink-300/40 rounded-full blur-3xl" />
              <img
                src="/leaflet-novia.jpg"
                alt="Femoire Novia - Suplemen Kesehatan Wanita"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-3 mb-2">
                <Shield className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">BPOM Terdaftar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-3 mb-2">
                <Star className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">5.000+ Review</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-3 mb-2">
                <Heart className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">10.000+ Pelanggan</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-rose-100 rounded-full p-3 mb-2">
                <Flower2 className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">100% Bahan Alami</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Masalah Anda?</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apakah Anda Mengalami Hal Ini?
            </h2>
            <p className="text-lg text-gray-600">
              Jangan biarkan masalah ini mengganggu keharmonisan rumah tangga Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '😔', title: 'Keputihan Berlebih', desc: 'Rasa tidak nyaman dan kurang percaya diri' },
              { icon: '🤢', title: 'Bau Tidak Sedap', desc: 'Membuat Anda malu dekat suami' },
              { icon: '😣', title: 'Kekeringan Miss V', desc: 'Hubungan intim terasa menyakitkan' },
              { icon: '😤', title: 'Mood Swing Berat', desc: 'Emosi tidak stabil, marah-marah tanpa alasan' },
              { icon: '😴', title: 'Siklus Haid Tidak Teratur', desc: 'Nyeri haid yang mengganggu aktivitas' },
              { icon: '😓', title: 'Kurang Bergairah', desc: 'Energi menurun, cepat lelah' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 hover:border-rose-300 transition-colors shadow-md">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 px-4 bg-rose-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-rose-600">Solusi Tepat</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perkenalkan: Femoire Novia 💕
            </h2>
            <p className="text-lg text-rose-100 max-w-2xl mx-auto">
              Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Flower2 className="w-8 h-8" />, title: 'Atasi Keputihan', desc: 'Mengatasi keputihan berlebih dan bau tidak sedap' },
              { icon: <Heart className="w-8 h-8" />, title: 'Kencangkan Otot', desc: 'Memperkuat otot rahim dan miss V' },
              { icon: <Sparkles className="w-8 h-8" />, title: 'Seimbangkan Hormon', desc: 'Mengatur siklus menstruasi dan hormon' },
              { icon: <Zap className="w-8 h-8" />, title: 'Tingkatkan Energi', desc: 'Mengurangi stres dan meningkatkan vitalitas' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <div className="bg-white/20 rounded-full p-3 w-fit mb-2">
                    {item.icon}
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-rose-100">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Bahan Premium</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bahan-Bahan Alami Premium
            </h2>
            <p className="text-lg text-gray-600">
              Diproses dengan teknologi canggih untuk menjaga kualitas dan khasiat
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Saffron Premium',
                desc: 'Antioksidan kuat, mengatur serotonin, meredakan gejala PMS, mengontrol emosi dan nafsu makan',
                highlight: 'Bahan Termahal di Dunia! 🌟'
              },
              {
                name: 'Manjakani',
                desc: 'Memperkuat otot rahim, mengurangi kekeringan vagina, merelaksasi otot miss V',
                highlight: 'Rahasianya Wanita Timur!'
              },
              {
                name: 'Kacip Fatimah',
                desc: 'Mengatur siklus menstruasi, meredakan nyeri haid, mengontrol produksi hormon',
                highlight: 'Rempah Ajaib Malaysia!'
              },
              {
                name: 'Maca',
                desc: 'Memperkuat tubuh, mengurangi stres, meningkatkan energi dan stamina',
                highlight: 'Superfood dari Peru!'
              },
              {
                name: 'Pueraria Mirifica',
                desc: 'Mengatur estrogen, meredakan gejala PMS, menjaga kesehatan reproduksi',
                highlight: 'Rahasia Kecantikan Wanita Thailand!'
              },
              {
                name: 'Fenugreek & Hops',
                desc: 'Meredakan kram, mood swing, insomnia, dan gejala menopause',
                highlight: 'Kombinasi Terbaik!'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
                  <p className="text-sm font-medium text-rose-600">{item.highlight}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Testimoni Nyata</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka? 💬
            </h2>
            <p className="text-lg text-gray-600">
              Ribuan wanita telah merasakan manfaat Femoire Novia
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ibu Anisa, 35 th',
                city: 'Jakarta',
                rating: 5,
                text: 'Awalnya ragu, tapi setelah minum 2 minggu, keputihan berkurang drastis! Suami juga bilang saya lebih wangi dan percaya diri. Makasih Femoire Novia!'
              },
              {
                name: 'Ibu Dewi, 38 th',
                city: 'Surabaya',
                rating: 5,
                text: 'Siklus haid jadi teratur, tidak lagi sakit saat datang bulan. Mood juga lebih stabil. Produk beneran bagus dan aman!'
              },
              {
                name: 'Ibu Ratna, 42 th',
                city: 'Bandung',
                rating: 5,
                text: 'Pasca melahirkan, miss V jadi kering. Setelah konsumsi Femoire Novia, masalah teratasi! Hubungan dengan suami jadi lebih harmonis.'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-rose-100 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{item.text}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
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
      <section id="order-section" className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">Promo Terbatas</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pesan Sekarang, Dapatkan Harga Spesial! 🎉
            </h2>
            <p className="text-lg text-gray-600">
              Stok terbatas, jangan sampai kehabisan!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-colors">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-gray-900">Paket Hemat</CardTitle>
                <CardDescription>1 Botol</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-rose-600">Rp 349.000</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    60 Kapsul
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Untuk 30 Hari
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Gratis Ongkir
                  </li>
                </ul>
                <Button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '1' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-4 border-rose-400 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-rose-600 text-white px-4 py-1 text-sm font-bold">POPULER</Badge>
              </div>
              <CardHeader className="text-center pb-4 bg-rose-50">
                <CardTitle className="text-gray-900">Paket Super</CardTitle>
                <CardDescription>2 Botol</CardDescription>
                <div className="mt-4">
                  <span className="text-lg text-gray-400 line-through">Rp 698.000</span>
                  <span className="text-3xl font-bold text-rose-600 ml-2">Rp 599.000</span>
                </div>
                <p className="text-sm text-green-600 font-medium mt-1">Hemat Rp 99.000!</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    120 Kapsul
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Untuk 60 Hari
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Gratis Ongkir
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-rose-600">Bonus E-Book Kesehatan!</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                  onClick={() => {
                    setFormData({ ...formData, quantity: '2' })
                    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Pilih Paket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-rose-300 transition-colors">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-gray-900">Paket Sultan</CardTitle>
                <CardDescription>3 Botol</CardDescription>
                <div className="mt-4">
                  <span className="text-lg text-gray-400 line-through">Rp 1.047.000</span>
                  <span className="text-3xl font-bold text-rose-600 ml-2">Rp 849.000</span>
                </div>
                <p className="text-sm text-green-600 font-medium mt-1">Hemat Rp 198.000!</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    180 Kapsul
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Untuk 90 Hari
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Gratis Ongkir Prioritas
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-rose-600">Bonus E-Book + Konsultasi!</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900"
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
          <Card id="order-form" className="border-2 border-rose-200 shadow-xl">
            <CardHeader className="bg-rose-50">
              <CardTitle className="text-2xl text-gray-900 text-center">Formulir Pemesanan</CardTitle>
              <CardDescription className="text-center">Isi data diri Anda, kami akan segera menghubungi</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleOrder} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Lengkap *
                  </label>
                  <textarea
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 min-h-24"
                    placeholder="Masukkan alamat lengkap pengiriman"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Botol *
                  </label>
                  <select
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                  >
                    <option value="1">1 Botol - Rp 349.000</option>
                    <option value="2">2 Botol - Rp 599.000 (Hemat Rp 99.000)</option>
                    <option value="3">3 Botol - Rp 849.000 (Hemat Rp 198.000)</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-full"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Kirim Pesanan via WhatsApp
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Data Anda aman dan hanya digunakan untuk keperluan pengiriman
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-700">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Berapa lama hasilnya akan terlihat?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Hasil bervariasi pada setiap individu. Sebagian besar pelanggan merasakan perubahan dalam 1-2 minggu pemakaian rutin. Untuk hasil maksimal, disarankan konsumsi minimal 1-2 bulan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Apakah Femoire Novia aman dikonsumsi?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ya, Femoire Novia terbuat dari 100% bahan alami berkualitas premium dan telah terdaftar BPOM. Namun, wanita hamil dan menyusui disarankan berkonsultasi dengan dokter terlebih dahulu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Bagaimana cara konsumsinya?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Konsumsi 2 kapsul sehari, 1 kapsul pagi dan 1 kapsul malam setelah makan. Disarankan minum air putih yang cukup untuk hasil maksimal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Apakah ada efek samping?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Femoire Novia tidak memiliki efek samping berbahaya karena terbuat dari bahan alami. Namun, jika Anda memiliki kondisi medis tertentu atau sedang minum obat dokter, sebaiknya konsultasi terlebih dahulu.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Bagaimana cara pembayarannya?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Pembayaran dapat dilakukan melalui transfer bank (BCA, Mandiri, BRI) atau e-wallet (GoPay, OVO, Dana). Detail pembayaran akan dikirimkan via WhatsApp setelah Anda mengisi formulir pemesanan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border-2 border-rose-100 rounded-lg px-4">
              <AccordionTrigger className="text-left font-medium text-gray-900">
                Berapa lama pengirimannya?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Pengiriman reguler membutuhkan 2-4 hari kerja untuk Jabodetabek dan 3-7 hari kerja untuk luar Jabodetabek. Pengiriman prioritas tersedia dengan tambahan biaya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Jangan Tunda Lagi! 💕
          </h2>
          <p className="text-lg text-rose-100 mb-8">
            Kembalikan kepercayaan diri dan keharmonisan rumah tangga Anda sekarang juga. 
            Stok terbatas, pesan sebelum kehabisan!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-full"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin konsultasi tentang Femoire Novia', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Femoire Novia</h3>
              <p className="text-gray-400 text-sm">
                Suplemen kesehatan wanita premium dengan bahan-bahan alami berkualitas tinggi untuk mengatasi segala masalah kewanitaan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 812-3456-7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +62 812-3456-7890</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Informasi</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>✓ BPOM Terdaftar</p>
                <p>✓ 100% Bahan Alami</p>
                <p>✓ Garansi Produk Asli</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Femoire Novia. Semua hak dilindungi.</p>
            <p className="mt-2">
              Disclaimer: Hasil yang didapatkan dapat bervariasi pada setiap individu. 
              Produk ini bukan pengganti obat dokter.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890?text=Halo, saya ingin memesan Femoire Novia"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}