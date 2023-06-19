import styles from './About.module.scss';


function About(){
    return(
        <section className={styles.about} id='about'>
            <h2>Greetings, my name is Daniel!</h2>
            <div className={styles.text}>
                <div className={styles.intro}>
                    <p>I am Full-Stack developer with a strong aspiration to excel in the Hi-Tech field. I&apos;m not afraid of challenges and have a strong dedication to continuous learning and strive to stay up-to-date with the latest advancements in web development.</p>
                </div>
                <br />
                <div className={styles.personal}>
                    <p>Apart from the web-development, I&apos;m passionate about cars, photography and curious about science. Have two blogs on Instagram, one is dedicated to cars, the second is about aesthetic photogrpahy overall. Also I&apos;m fluent in English and Russian, know Hebrew, and I&apos;m currently studying Finnish.</p>
                </div>
                <br />
                <div className={styles.journey}>
                    <h3>My Journey:</h3>
                    <p>Being a developer was my dream since I was 12 years old, when Computer Science teacher introduced me to PascalABC and the opportunities it can do. It wasn&apos;t much, but it was big enough for me to be willing to grow in that direction.</p>
                    <br/>
                    <p>Through self-study, and 3-years experience as a QA-Engineer, I have acquired a strong foundation in the software development life cycle, testing company&apos;s products and understanding both front-end and back-end technologies.</p>
                    <br/>
                    <p>In 2022 I&apos;ve took part in Practicum100 Full-Stack course, which I&apos;ve succesfully finished and gained some vital skills, by making my own projects in React.JS with a Node.JS back-end. Currently, I am part of Desight studio, however I am open for some new offerings and experiences.</p>
                </div>
            </div>
        </section>
    );
}

export default About;