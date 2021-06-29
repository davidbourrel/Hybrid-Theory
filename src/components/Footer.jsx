import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className='container'>
          <h3>About</h3>
          <ul>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className='container'>
          <h3>Support</h3>
          <ul>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>
        <div className='container'>
          <h3>Community</h3>
          <ul>
            <li>Events</li>
            <li>Community Standards</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
