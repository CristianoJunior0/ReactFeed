import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/CristianoJunior0.png" />
                    <div className={styles.authorInfo}>
                        <strong>Cristiano Junior</strong>
                        <span>Junior Developer</span>
                    
                    </div>
                    <time title='30 de junho ร s 11 horas e 35 minutos' dateTime='22-06-30 11:35:00'>Publicado hรก 1 hora</time>
                </div>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa ๐</p>
                <p>Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐</p>
                <p>๐<a href=""> jane.design/doctorcare</a></p>
                <p><a>#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}
