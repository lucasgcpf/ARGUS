import { type ReactNode } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { PersonalPage } from '@/features/personal/personal-page'
import { ProfessionalPage } from '@/features/professional/professional-page'

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto min-h-screen max-w-4xl p-8">
      <header className="mb-8 space-y-2">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">ARGUS</p>
        <h1 className="text-3xl font-bold">Context Isolated Workspace</h1>
      </header>
      {children}
    </main>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/personal" replace />,
  },
  {
    path: '/personal',
    element: (
      <AppLayout>
        <PersonalPage />
      </AppLayout>
    ),
  },
  {
    path: '/professional',
    element: (
      <AppLayout>
        <ProfessionalPage />
      </AppLayout>
    ),
  },
])
