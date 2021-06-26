import './App.css';
import Dashboard from './components/views/Dashboard/Dashboard'
import Github from './components/ui/Github/Github'
import Codechef from './components/ui/Codechef/Codechef'
import Leetcode from './components/ui/Leetcode/Leetcode'
import NPM from './components/ui/NPM/NPM'
import Reddit from './components/ui/Reddit/Reddit'
import Twitter from './components/ui/Twitter/Twitter'
import Linkedin from './components/ui/Linkedin/Linkedin'
import Hackerearth from './components/ui/Hackerearth/Hackerearth'
import Hackerrank from './components/ui/Hackerrank/Hackerrank'
import Fiverr from './components/ui/Fiverr/Fiverr'
import Twitch from './components/ui/Twitch/Twitch'

const githubUrl = 'https://github.com/WishAllVA'
const codechefUrl = 'https://www.codechef.com/users/wishall123'
const leetcodeUrl = 'https://leetcode.com/wish_all/'
const npmUrl = 'https://www.npmjs.com/~vishal_arora'
const redditUrl = 'https://www.reddit.com/user/wishall_va'
const twitterUrl = 'https://twitter.com/arora2106'
const linkedinUrl = 'https://www.linkedin.com/in/vishal-arora-2106/'
const hackerearthUrl = 'https://www.hackerearth.com/@K1528_11510832_A06'
const hackerrankUrl = 'https://www.hackerrank.com/aroravishal629'
const fiverrUrl = 'https://www.fiverr.com/owldeveloper629'
const twitchUrl = 'https://www.twitch.com/wishall_va'

function App() {
  const click = (url) => { window.open(url, '_blank'); }
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        {/* <Github click={() => click(githubUrl)} />
        <Codechef click={() => click(codechefUrl)} />
        <Leetcode click={() => click(leetcodeUrl)} />
        <NPM click={() => click(npmUrl)} />
        <Reddit click={() => click(redditUrl)} />
        <Twitter click={() => click(twitterUrl)} />
        <Linkedin click={() => click(linkedinUrl)} />
        <Hackerearth click={() => click(hackerearthUrl)} />
        <Hackerrank click={() => click(hackerrankUrl)} />
        <Fiverr click={() => click(fiverrUrl)} />
        <Twitch click={() => click(twitchUrl)} /> */}
      </header>
    </div>
  );
}

export default App;
