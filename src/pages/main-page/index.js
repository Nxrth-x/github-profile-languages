// State
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import { FiUsers } from "react-icons/fi";

// Styles
import {
  MainContainer,
  Main,
  ProfileContainer,
  ContentContainer,
} from "./styles";

function MainPage() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.github.com/users/Nxrth-x");
      const data = await response.json();
      console.log(data);
      setUserData(data);
    })();
  }, []);

  return (
    <MainContainer>
      <Header />
      <Main>
        {[userData].map(
          ({ avatar_url, name, login, bio, followers, following }, index) => (
            <ProfileContainer key={index}>
              <div>
                <img src={avatar_url} alt="Profile pic" />
                <h1>{name}</h1>
                <p className="login">{login}</p>
                <p>{bio}</p>
                <button>Follow</button>
                <div className="followers">
                  <FiUsers fontSize={16} />
                  <p>{followers} followers</p>
                  <p>{following} following</p>
                </div>
              </div>
            </ProfileContainer>
          )
        )}
        <ContentContainer>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ornare augue in turpis tincidunt posuere. Mauris pellentesque lectus
            sed fermentum elementum. Praesent suscipit id nibh vitae vehicula.
            Ut luctus est ut tellus suscipit, a pulvinar nulla placerat. Aenean
            dignissim massa gravida erat malesuada gravida. Integer et aliquet
            metus. Sed vitae velit in magna pulvinar congue a ac purus. Nullam
            eu arcu in lacus imperdiet condimentum. Quisque posuere rutrum
            congue. Ut luctus urna et erat tincidunt sodales. Fusce consectetur
            ante in nisi pulvinar, quis bibendum nulla varius. In a rutrum
            risus, sit amet condimentum nibh. Vestibulum sagittis non sapien eu
            feugiat. Integer iaculis non ante eget pellentesque. Nullam
            vulputate id ex sit amet dictum. In et pretium sapien, lacinia
            condimentum risus. Mauris pretium scelerisque erat, pulvinar
            facilisis leo mattis non. Donec odio ipsum, feugiat eu nisi ac,
            molestie convallis urna. Etiam sem eros, efficitur et efficitur a,
            sagittis id eros. Nam auctor imperdiet justo. Ut gravida vehicula
            dictum. Maecenas convallis dapibus mauris, ac egestas eros sodales
            quis. Cras tincidunt purus est, sit amet molestie libero eleifend
            in. Praesent eleifend erat eu dolor bibendum, id convallis augue
            fringilla. Curabitur eros dui, laoreet quis mollis vitae, suscipit
            eu justo. Donec pharetra, mi quis molestie pretium, augue lacus
            dapibus nisi, vel porttitor libero purus non elit. Ut auctor
            efficitur blandit. Nunc laoreet ipsum urna. Cras finibus nisi mattis
            ex porttitor porta. Nam ut finibus felis. Cras ultricies nec lacus
            non tempus. Vestibulum ultrices, augue quis sollicitudin cursus,
            arcu lacus dignissim enim, in interdum ex nibh sed nulla. Maecenas
            eleifend feugiat ipsum vel volutpat. Cras auctor dolor dolor. In
            viverra ante quis nisl rutrum, non ultricies eros porttitor.
            Praesent accumsan feugiat nisl, id dictum nulla commodo eu. Fusce ex
            lectus, consectetur et ligula ut, malesuada viverra tortor. Proin
            porta tristique neque ac consectetur. Quisque in fringilla mi, eget
            ullamcorper tellus. Integer malesuada ultricies dignissim. Fusce
            lacus quam, tempus eu magna vitae, blandit congue tortor. Phasellus
            ligula dui, sollicitudin vitae sodales a, condimentum ut orci. Nunc
            non orci in orci bibendum semper at et enim. Phasellus vehicula
            augue non quam mollis, et auctor turpis accumsan. Nulla a aliquet
            augue, eget consequat arcu. Curabitur varius gravida tempor.
            Pellentesque iaculis ligula quis sapien luctus, eget molestie nisl
            imperdiet. Cras porta tempus semper. Sed quis libero arcu. Vivamus
            laoreet vel diam eget mollis. Cras facilisis erat eu interdum
            rutrum. Curabitur sagittis ipsum eget libero vulputate aliquet. Sed
            ut risus tellus. Mauris euismod, orci in imperdiet malesuada, dolor
            augue ultricies lacus, sit amet suscipit augue tellus ac elit.
            Nullam vel congue urna, nec placerat sapien. Aenean porta id purus
            mollis vestibulum. Vivamus non sem at nisl convallis tempus.
          </p>
        </ContentContainer>
      </Main>
    </MainContainer>
  );
}

export default MainPage;
