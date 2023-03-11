import Topbar from '@/components/topBar'
import { personalData } from '@/data/presonalData'
import './globals.css'

export const metadata = {
  title: 'Syed Hamza Gilani',
  description: 'resume',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <Topbar data={personalData}/>
      {children}
      </body>
    </html>
  )
}
