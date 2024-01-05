import * as S from './styled'

export default function Header() {
  return (
    <S.Header>
      <a href="/">
        <h2>Elegance</h2>
      </a>
      <nav>
        <a href="#" className='active'>( Item )</a>
        <a href="#">( Item )</a>
        <a href="#">( Item )</a>
        <a href="#">( Item )</a>
        <a href="#">( Item )</a>
        <a href="#">( Item )</a>
        <a href="#">( Item )</a>
      </nav>
      <nav className="hamburger">
        <span>Menu Icon (X)</span>
      </nav>
    </S.Header>
  )
}

{/* a etiketi yerine routerda ki link'i kullanirdim fakat one page oldugu icin gerek duymadim. */}