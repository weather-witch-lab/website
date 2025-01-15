import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function WhitepaperSection() {
  return (
    <Card className="bg-blue-900/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Iris AI Whitepaper</CardTitle>
        <CardDescription className="text-blue-200">
          Next-Generation Weather AI Agent: Harnessing Google DeepMind and ECMWF for Precision Forecasting and Climate Insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-blue-100 mb-4">
          Discover how our Weather AI Agent leverages cutting-edge AI technologies and high-quality meteorological data to revolutionize weather forecasting and climate insights.
        </p>
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="https://pdflink.to/irisweatherai/" target="_blank">
            View Whitepaper
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

