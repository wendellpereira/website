import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="text-2xl font-bold">
            Hey, I'm a guitar player ready for the next gig
          </h1>
          <p>
            See my work trough the songs and other stuff around
          </p>
        </div>
      </Container>

      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/me-rehearsing.png"
          alt="me rehearsing"
          width={864}
          height={1414}
        />
        <p>Photo: Karine &copy;</p>
      </div>
    </>
  )
}

export default HomePage
