import HeroCard from './HeroCard'

function HeroCardsContainer({ heroes }) {

  const heroCards = () => heroes.map(hero => {
    return <HeroCard key={hero.id} hero={hero} />
  })

  return(
    <section className="hero-cards-container">
      { heroCards() }
    </section>
  )
}

export default HeroCardsContainer