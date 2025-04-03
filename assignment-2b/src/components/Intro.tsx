type nameProp = {
    fname: string,
    lname: string,
}

function Intro(props: nameProp) {

    return (
        <div className="bg-base-300 border-info text-primary text-md p-8">
        {
            props.fname === 'Hudson' ? (
            <p>
                <p>
                    My name is {props.fname} {props.lname}, I am a junior Robotics Engineering student at WPI with significant hands-on and
                    industry experience. My dream is to engineer positive solutions to climate change. I want to spend my life
                    making the world better by using my engineering skills to help the environment. My interdisciplinary
                    education and experience place me in an excellent position to think outside the box and develop innovative
                    solutions.
                </p>
                <p>
                    In my free time, my favorite hobby is cycling, particularly gravel biking. I have a Grape Canyon Grizl,
                    which I can take on just about any trail. I bike up to Holden and Paxton and get lost riding on rail
                    trails and fire roads. I enjoy biking in the woods away from cars, experiencing nature, and discovering
                    any old buildings I can find. In addition to riding trails, I represent WPI at cyclocross races, as shown
                    in the photo above. Cyclocross is a unique race where participants ride bikes with limited grip across a
                    grassy—often muddy—course with intentionally placed obstacles and sharp corners, forcing riders to get off
                    their bikes and run distances. It is fun because race conditions reward skill over raw strength, allowing
                    even new cyclists with budget equipment to perform well.
                </p>
            </p>
            ) : (
                <>
                    <p>
                        Hi! I'm {props.fname} {props.lname}, a robotics engineer and a winter sports enthusiast. 
                        I'm currently a sophomore at Worcester Polytechnic Institute majoring in Computer Science and Robotics and minoring in Mathematics.
                        I'm interested in building products for search and rescue, aerospace applications, and more!
                </p>
                <p>
                    I've been snowboarding since I was 12 and skiing since I was 5 I enjoy snowboarding more. I ride a K2 Manifest board with NOW bindings.
                    I can ride switch at an intermediate level and you'll often see me riding at Mt. Bachelor!
                </p>
            </>
            )   
        }
        </div>
    )
}

export default Intro
