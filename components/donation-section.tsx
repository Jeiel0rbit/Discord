"use client"

import { useState } from "react"
import { Copy, Heart, QrCode, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { toast } from "@/hooks/use-toast"

const PIX_KEY = "08a19869-90c3-48ae-8d8b-98d6ca58d1d8"
const PIX_QR_CODE =
  "00020101021126580014BR.GOV.BCB.PIX013637019bb4-a551-44c7-b845-7585e58390495204000053039865802BR5913Jeiel Miranda6009SAO PAULO62080504daqr63043BEF"

export function DonationSection() {
  const [copied, setCopied] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setCopied(true)
      toast({
        title: "💚 Obrigado pelo apoio!",
        description:
          "Sua contribuição ajuda a manter as notícias de tecnologia chegando até você na Square Cloud e LoFi Square.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar a chave PIX. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const generateQRCode = async () => {
    try {
      // Usando a API do QR Server para gerar o QR Code
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(PIX_QR_CODE)}`
      setQrCodeUrl(qrUrl)
    } catch (err) {
      toast({
        title: "Erro ao gerar QR Code",
        description: "Não foi possível gerar o QR Code. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  const handleDialogClose = () => {
    toast({
      title: "💚 Obrigado pelo apoio!",
      description:
        "Sua contribuição é fundamental para manter o trabalho voluntário de trazer notícias relevantes e compactas de tecnologia.",
    })
  }

  return (
    <Card className="bg-gray-800 text-white border-gray-700 shadow-xl">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="h-6 w-6 text-red-500" />
          <CardTitle className="text-2xl font-bold text-white">Apoie Meu Trabalho</CardTitle>
        </div>
        <CardDescription className="text-gray-300 text-base">
          Se você gosta das notícias de tecnologia que compartilho e quer ajudar a manter este trabalho voluntário
          funcionando, considere fazer uma doação via PIX. Toda contribuição é muito bem-vinda!
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* PIX Key Section */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <i className="fas fa-key text-blue-400"></i>
              Chave PIX
            </h3>
            <Button
              onClick={copyPixKey}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-green-400" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copiar
                </>
              )}
            </Button>
          </div>

          <div className="bg-gray-700 rounded-md p-3 font-mono text-sm text-gray-200 break-all border border-gray-600">
            {PIX_KEY}
          </div>
        </div>

        {/* QR Code Dialog */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                onClick={generateQRCode}
              >
                <QrCode className="h-4 w-4" />
                Ver QR Code PIX
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-center text-white">QR Code PIX</DialogTitle>
                <DialogDescription className="text-center text-gray-300">
                  Escaneie o código abaixo com seu app bancário
                </DialogDescription>
              </DialogHeader>
              <DialogClose
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                onClick={handleDialogClose}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <div className="flex flex-col items-center space-y-4 py-4">
                {/* QR Code real */}
                <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center p-4">
                  {qrCodeUrl ? (
                    <img
                      src={qrCodeUrl || "/placeholder.svg"}
                      alt="QR Code PIX"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-gray-500">
                      <QrCode className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Gerando QR Code...</p>
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <p className="text-sm text-gray-300 text-center mb-2">Ou copie a chave PIX:</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-700 rounded-md p-2 font-mono text-xs text-gray-200 break-all border border-gray-600">
                      {PIX_KEY}
                    </div>
                    <Button
                      onClick={copyPixKey}
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white bg-transparent"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Additional info */}
        <div className="text-center text-sm text-gray-400">
          <p>
            Todas as doações são usadas para manter o projeto funcionando e me motivar a continuar compartilhando as
            informações mais relevantes da tecnologia.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
