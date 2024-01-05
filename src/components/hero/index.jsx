import * as S from './styled'

export default function Hero() {
  return (
    <S.Hero>
        <div className='content'>
            <h3>HELLO, WELCOME TO</h3>
            <h2>ELEGANCE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, odit provident? Odio nostrum impedit libero, porro eveniet eaque repellendus totam quod aperiam incidunt amet voluptate officia reiciendis error!</p>
        </div>
        <div className="sidebar">
            <div>
                <a href="#" target='_blank'>F</a>
            </div>
            <div>
                <a href="#" target='_blank'>X</a>
            </div>
            <div>
                <a href="#" target='_blank'>In</a>
            </div>
        </div>
        <div className="scroll-the-down">
            <span>↓</span>
            <p>scroll the down</p>
        </div>
    </S.Hero>
  )
}