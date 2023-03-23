import Container from '../components/container'
import Image from 'next/image'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-6">
          <h1 className="title">
            Outta Coentro
          </h1>
        </div>
      </Container>
      <div className="container max-w-4xl m-auto px-4 mt-20">
        <Image
          src="/coentro.jpg"
          alt="me rehearsing"
          width={'100%'}
          height={'100%'} />
      </div>
    </>
  )
}

export default HomePage
