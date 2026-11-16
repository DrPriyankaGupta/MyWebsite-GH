import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo
        description="The page you are looking for could not be found. Return to the website of Dr. Priyanka Gupta."
        title="Page not found | Dr. Priyanka Gupta"
      />
      <main className="not-found">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page seems to have wandered off.</h1>
        <p>Let's find our way back to the beginning.</p>
        <Link className="button button--primary" to="/">Return home</Link>
      </main>
    </>
  )
}
