import { Switch, Route } from 'react-router-dom';
import { Users } from './pages/Users';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { CollaborationForum } from './pages/CollaborationForum';
import { ProposalForum } from './pages/ProposalForum';
import { Business } from './pages/categories/Business';
import { Data } from './pages/categories/Data';
import { DigitalMarketing } from './pages/categories/DigitalMarketing';
import { GraphicsDesign } from './pages/categories/GraphicsDesign';
import { Lifestyle } from './pages/categories/Lifestyle';
import { MusicAudio } from './pages/categories/MusicAudio';
import { ProgrammingTech } from './pages/categories/ProgrammingTech';
import { VideoAnimation } from './pages/categories/VideoAnimation';
import { WritingTranslation } from './pages/categories/WritingTranslation';
import { SelectCategory } from './pages/SelectCategory';

const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/programming' exact component={ProgrammingTech} />
      <Route path='/users' exact component={Users} />
      <Route path='/sign-in' exact component={SignIn} />
      <Route path='/sign-up' exact component={SignUp} />
      <Route path='/business' exact component={Business} />
      <Route path='/data' exact component={Data} />
      <Route path='/digital-marketing' exact component={DigitalMarketing} />
      <Route path='/graphics-design' exact component={GraphicsDesign} />
      <Route path='/lifestyle' exact component={Lifestyle} />
      <Route path='/music-audio' exact component={MusicAudio} />
      <Route path='/video-animation' exact component={VideoAnimation} />
      <Route path='/writing-translation' exact component={WritingTranslation} />
      <Route path='/proposal-forum' exact component={ProposalForum} />
      <Route path='/select-category' exact component={SelectCategory} />
      <Route path='/collaboration-forum' exact component={CollaborationForum} />
    </Switch>
  );
};

export default App;
