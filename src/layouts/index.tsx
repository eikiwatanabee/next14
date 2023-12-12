import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/onboarding">
      <html lang="ja">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout