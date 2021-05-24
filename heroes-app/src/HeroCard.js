function HeroCard({ hero }) {

  const powerTags = () => {
    return hero.powers.map(power => {
      return (
        <li className="power-names" key={power.id}>
          { power.name }
        </li>
      )
    });
  }

  return (
    <div className="hero-card">
      <div className="hero-card-attributes">
        <div className="hero-card-name">
          <label className="hero-card-label">
            Hero Name:
          </label>
          <p>{ hero.name }</p>
        </div>
        <div className="hero-card-weapon">
          <label className="hero-card-label">
            Weapon:
          </label>
          <p>{ hero.weapon.name }</p>
        </div>
        <div className="hero-card-powers">
          <label className="hero-card-label" id="powers-label">
            Powers:
          </label>
          <ul className="powers-list">
            { powerTags() }
          </ul>
        </div>
      </div>
      <div className="hero-card-buttons">
        <button>Change Attributes</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default HeroCard