import { Karla } from "next/font/google"
import styles from "@/styles/home.module.css"

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
})

export default function Home() {
  return (
    <main className={` ${styles.main} ${karla.className}`}>
      <div className={styles.container}>
        <div>
          <h1>Join our community</h1>
          <span>30-day, hassle-free money back guarantee</span>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>
        <div>
          <h2>Monthly Subscription</h2>
          <div>
            <h3>$29</h3>
            <span>per month</span>
          </div>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div>
          <h3> Why Us</h3>
          <p>
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </main>
  )
}
