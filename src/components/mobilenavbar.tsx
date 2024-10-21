import { useEffect, useState } from 'react'

// Certifique-se de que o caminho está correto
export const MobileNavbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null)

  useEffect(() => {
    const list = document.querySelectorAll('.list')

    function handleScroll() {
      const sections = document.querySelectorAll('section')
      let currentSectionIndex: number | null = null

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSectionIndex = index
        }
      })

      setActiveLink(currentSectionIndex)
    }

    function activeLinkHandler(this: HTMLElement) {
      // biome-ignore lint/complexity/noForEach: <explanation>
      list.forEach(item => item.classList.remove('active'))
      this.classList.add('active')
    }

    // biome-ignore lint/complexity/noForEach: <explanation>
    list.forEach(item => item.addEventListener('click', activeLinkHandler))
    window.addEventListener('scroll', handleScroll)

    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      list.forEach(item => item.removeEventListener('click', activeLinkHandler))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const list = document.querySelectorAll('.list')
    if (activeLink !== null) {
      list.forEach((item, index) => {
        if (index === activeLink) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    }
  }, [activeLink])

  return (
    <div className="navigation">
      <ul>
        <li className="list active">
          <a href="#home">
            <span className="icon">
              <i className="bi bi-house">{/* asd */}</i>
            </span>
            <span className="text">Home</span>
            <span className="circle">{/* sdsd */}</span>
          </a>
        </li>
        <li className="list">
          <a href="#about">
            <span className="icon">
              <i className="bi bi-person">{/* sdsd */}</i>
            </span>
            <span className="text">Sobre</span>
            <span className="circle">{/* dsdfsd */}</span>
          </a>
        </li>
        <li className="list">
          <a href="#tecnologies">
            <span className="icon">
              <i className="bi bi-gear-fill">{/* sdasdas */}</i>
            </span>
            <span className="text">Tecnologias</span>
            <span className="circle">{/* dsfsdf */}</span>
          </a>
        </li>
        <li className="list">
          <a href="#projects">
            <span className="icon">
              <i className="bi bi-code-slash">{/* lasdk */}</i>
            </span>
            <span className="text">Projetos</span>
            <span className="circle">{/* lkasdj */}</span>
          </a>
        </li>
        <li className="list">
          <a href="#contact">
            <span className="icon">
              <i className="bi bi-telephone">{/* sdas */}</i>
            </span>
            <span className="text">Contato</span>
            <span className="circle">{/* asd */}</span>
          </a>
        </li>
        <div className="indicator">{/* asd */}</div>
      </ul>
    </div>
  )
}
