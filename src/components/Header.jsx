export default function Header() {
    return (
      <header className="App-header">
        <nav className="mx-auto flex p-6 lg:px-8 bg-sky-100" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8 w-auto" 
                src="/logo-ticketportal-2023-blue.svg" 
                alt="Ticketportal-logo" />
            </a>
          </div>
        </nav>
      </header>
    )
  }