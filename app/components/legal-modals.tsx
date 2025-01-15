'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function TermsOfServiceModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs text-blue-300 hover:text-blue-400">Terms of Service</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p>Welcome to Iris AI Agent. By using our services, you agree to these simple terms:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Iris provides weather forecasts and climate insights. We strive for accuracy but cannot guarantee it 100% of the time.</li>
            <li>You agree to use our services responsibly and not misuse or attempt to manipulate our AI systems.</li>
            <li>We may update these terms occasionally. Continued use of our services implies acceptance of any changes.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
            <li>We reserve the right to terminate or suspend access to our services for violations of these terms.</li>
          </ul>
        </div>
        <Button onClick={() => setOpen(false)} className="mt-4">OK</Button>
      </DialogContent>
    </Dialog>
  )
}

export function PrivacyPolicyModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs text-blue-300 hover:text-blue-400">Privacy Policy</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <p>At Iris AI Agent, we respect your privacy. Here's a simple overview of how we handle your information:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>We collect data you provide (like location) and data from your use of our services (like weather queries).</li>
            <li>We use this data to provide and improve our weather forecasting and climate insight services.</li>
            <li>We do not sell your personal information to third parties.</li>
            <li>We may share anonymized, aggregated data for research or analytical purposes.</li>
            <li>We use industry-standard security measures to protect your data.</li>
            <li>You can request access to, correction of, or deletion of your data by contacting us.</li>
          </ul>
        </div>
        <Button onClick={() => setOpen(false)} className="mt-4">OK</Button>
      </DialogContent>
    </Dialog>
  )
}

