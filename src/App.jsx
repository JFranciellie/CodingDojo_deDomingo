import {
  logo, ilustracao01, ilustracao02, caixa, standard, premium, mapa, patrocinio, user01,
  user02, user03, star, setaesquerda, scrollbar, setadireita
} from './assets/images';
import './App.css';


function App() {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt="" />
        <div className='links'>



          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Testimonials</a>
          <a href="">Help</a>
        </div>

        <div className="">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </nav>

      <div className="page01">

        <div className="page01esquerdo">
          <h1>Want anything to be easy with LaslesVPN</h1>
          <h3>Provide a network fopr all your needs with easy and fun using LeslesVPN discover interesting features from us</h3>
          <button>Get Started</button>
        </div>
        <div className="page01direita">
          <img src={ilustracao01} alt="" />
        </div>
      </div>
      <div className="contador">
        <div className="cont01"></div>
        <div className="icons">90+ User</div>
        <div className="cont02"></div>
        <div className="icons">30+ Location</div>
        <div className="cont03"></div>
        <div className="icons">50+ Servers</div>
      </div>

      <div className="page02">
        <div className="page01direita">
          <h1>WE Provide Many Features You Can Use</h1>
          <h3>You can explore the features that we provide with fun and have their own functions each feature.</h3>

          <ul>
            <li>Powerfull online protection.</li>
            <li>Internet without borders.</li>
            <li>Supercharged VPN</li>
            <li>No specific time limits.</li>
          </ul>

        </div>
        <div className="page02esquerda">
          <img src={ilustracao02} alt="" />

        </div>

      </div>
      <div className="page03">
        <div className="text">
          <h2>Choose Your Plan</h2>
          <h3>Let's choose the package that is best for you and explore it happily and cheerfully.</h3>
        </div>
        <div className="box">
          <div className="card">
            <img src={caixa} alt="" />
            <h4>Free Plan</h4>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>No Traffic Logs</li>
              <li>Works on All Devices</li>
            </ul>
            <h2>Free</h2>
            <button>Select</button>
          </div>
          <div className="card">
            <img src={standard} alt="" />
            <h4>Standard Plan</h4>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
            </ul>
            <h2>$9 / mo</h2>
            <button>Select</button>
          </div>
          <div className="card">
            <img src={premium} alt="" />
            <h4>Standard Plan</h4>
            <ul>
              <li>Unlimited Bandwitch</li>
              <li>Encrypted Connection</li>
              <li>Yes Traffic Logs</li>
              <li>Works on All Devices</li>
              <li>Connect Anyware</li>
              <li>Get New Features</li>
            </ul>
            <h2>$12 / mo</h2>
            <button>Select</button>

          </div>
        </div>
      </div>

      <div className='pagemap'>
        <h2>Huge Global Network</h2>
        <h2>of Fast VPN</h2>
        <h4>See LaslesVPN everywhere to make it easier for you when you move locations.</h4>
        <img src={mapa} alt="" />
        <img src={patrocinio} alt="" />
        <h2>Trusted by Thousands of </h2>
        <h2>Happy Customer</h2>
        <h4>These are the stories of our customers who have joined us with great </h4>
        <h4>pleasure when using this crazy feature.</h4>

      </div>
      <div className="carduser">
        <div className="comments">
          <div className="user">
            <div className="profile">
              <img src={user01} alt="" />
              <h4>Viezh Robert</h4>
              <h3>Warsaw,Poland</h3>
            </div>
            <div className="nota">
              <p>4,5</p>
              <img src={star} alt="" />
            </div>
          </div>
          <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. <br />
            LaslesVPN always the best”.</p>
        </div>
      </div>

      <div className="comments">
        <div className="user">
          <div className="profile">
            <img src={user02} alt="" />
            <h4>Yessica Christy</h4>
            <h3>Shanxi, China,</h3>
          </div>
          <div className="nota">
            <p>4,5</p>
            <img src={star} alt="" />
          </div>
        </div>
        <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
      </div>

      <div className="comments">
        <div className="user">
          <div className="profile">
            <img src={user03} alt="" />
            <h4>Kim Young Jou</h4>
            <h3>Seoul, South Korea</h3>
          </div>
          <div className="nota">
            <p>4,5</p>
            <img src={star} alt="" />
          </div>
        </div>
        <p>This is very unusual for my business that currently requires a virtual private network that has high security.</p>
      </div>

      <div className="carrossel">
        <div className="rolagem">
          <img src={scrollbar} alt="" />
        </div>
        <div className="setas">
          <img src={setaesquerda} alt="" />
          <img src={setadireita} alt="" />
        </div>
      </div>
      <div className="subs">
        <div className="subtxt">
          <h2>Subscribe Now for </h2>
          <h2>Get Special Features!</h2>
          <h4>Let's subscribe with us and find the fun.</h4>
        </div>

        <div className="button">
          <button>Subscribe Now</button>
        </div>

      </div>
      <div className="footer">
        <div className="socialmedia">
          <img src={logo} alt="" />
          <p>LaslesVPN is a private virtual network that</p>
          <p>has unique features and has high security.</p>
          <div className="icons">
            <img src="facebook" alt="" />
            <img src="twiter" alt="" />
            <img src="instagram" alt="" />
          </div>
          <p>©2020LaslesVPN</p>
        </div>
        <div className="product">
          <p>Product</p>
          <a href="">Download</a>
          <a href="">Pricing</a>
          <a href="">Locations</a>
          <a href="">Server</a>
          <a href="">Countries</a>
          <a href="">Blog</a>
        </div>
        <div className="Engage">
          <p>Engage</p>
          <a href="">LaslesVPN</a>
          <a href="">FAQ</a>
          <a href="">Tutorials</a>
          <a href="">About Us</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
        <div className="Earn-Money">
          <p>Earn Money</p>
          <a href="">Affilite</a>
          <a href="">Become partner</a>
        </div>
      </div>








    </>
  );
}

export default App;
