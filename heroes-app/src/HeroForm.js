import { useState, useEffect } from 'react'

function HeroForm( { addHero } ) {

  const [name, setName] = useState('')
  const [weaponId, setWeaponId] = useState("0")
  const [powerIds, setPowerIds] = useState([])
  const [allWeapons, setAllWeapons] = useState([])
  const [allPowers, setAllPowers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/weapons')
      .then(response => response.json())
      .then(apiWeapons => {
        setWeaponId(`${apiWeapons[0].id}`)
        setAllWeapons(apiWeapons)
    })

    fetch('http://localhost:3000/powers')
      .then(response => response.json())
      .then(apiPowers => setAllPowers(apiPowers))
  }, [])

  const weaponOptions = () => allWeapons.map(weapon => {
    return (
      <option key={weapon.id} value={weapon.id}>
        {weapon.name}
      </option>
    )
  })

  const powerChoices = () => allPowers.map(power => {
    return(
      <>
        <label htmlFor={'${power.name}-checkbox'}>{power.name}</label>
        <input
          type="checkbox"
          id={'${power.name}-checkbox'}
          name={power.name}
          value={power.id}
          onChange={event => setPowerIds([...powerIds, event.target.value])}
        />
      </>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/heros', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hero: {
          name,
          weapon_id: weaponId,
          power_ids: powerIds
        }
      })
    })
    .then(response => response.json())
    .then(addHero)
  }


  return (
    <form className="new-hero-form" onSubmit={handleSubmit}>
      <label htmlFor="hero-name">Declare Your Name Hero</label>
      <input
        type="text"
        id="hero-name"
        name="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <label>Choose Your Weapon</label>
      <select onChange={event => setWeaponId(event.target.value)}>
        { weaponOptions() }
      </select>
      <label>Select Your Powers</label>
      { powerChoices() }
      <input type="submit" value="Emerge Hero" />
    </form>
  )
}

export default HeroForm