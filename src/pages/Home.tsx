import { Panel } from "../components/Panel"
import Carousel from "../components/Carousel"
import * as images from '../assets/images'

export default function Home() {
  let screenshots = [
    {
      img: images.AvaliceImg1,
      desc: 'Meet Fenton! Your resident space-fox here to guide you on your journey!'
    },
    {
      img: images.AvaliceImg2,
      desc: 'Pass the time with dozens of fun and colorful 3d voxels to build!'
    },
    {
      img: images.AvaliceImg3,
      desc: 'Complete builds to progress through the world and help Fenton put the galaxy of Avalice back into shape (pun intended)!'
    }
  ]

  return (
    <div style={{
      margin: 'auto',
      width: '40%',
      padding: '40px'
    }}>
      <Panel header='Our Games'>
        <h2 style={{ textAlign: 'left' }}>Avalice</h2>
        <p><b>Release Date: </b> TBA.</p>
        <p><b>Description: </b> TBD.</p>
        <Carousel>
          {screenshots.map(x => (
            <div>
              <img width={1080 / 4} height={2340 / 4} src={x.img} alt={x.desc} />
              <p>{x.desc}</p>
            </div>
          ))}
        </Carousel>
      </Panel>
    </div >
  )
}