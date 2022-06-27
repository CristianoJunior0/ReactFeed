import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
      
          <Post
          author= "Cristiano Junior"
          content="Sou fã do Gustavinho RD"
         />
        
          <Post
          author="Gustavinho RD"
          content="Aos 12 fui diagnosticado como Rei Delas. Forget"
          />

        </main>
      </div>
    </div>
  )
}

