// State
import { useState, useEffect } from "react";

// Components
import Header from "../../components/header";
import { FiUsers } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiLocationMarker } from "react-icons/hi";
import Loading from "../../components/loading";

// Styles
import {
  MainContainer,
  Main,
  ProfileContainer,
  ContentContainer,
  Menu,
  Card,
  Repository,
  Title,
} from "./styles";

function MainPage() {
  const [windowVariables, setWindowVariables] = useState({
    loading: true,
    languages: true,
    user: "Nxrth-x",
  });
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [languages, setLanguages] = useState([]);

  const getLanguages = async ({ repos_url }) => {
    let response = await fetch(repos_url);
    const repos = await response.json();
    setRepositories(repos);
    let languages = [];
    for (let { languages_url } of repos) {
      let r = await fetch(languages_url);
      let lang = await r.json();
      languages.push(Object.keys(lang));
    }
    setLanguages([...new Set(languages.flat())]);
    setWindowVariables({ ...windowVariables, loading: false });
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/users/${windowVariables.user}`
      );
      const data = await response.json();
      setUserData(data);
      getLanguages(data);
    })();
  }, [windowVariables.user]);

  return (
    <>
      {windowVariables.loading && <Loading />}
      <MainContainer>
        <Header
          search={(value) =>
            setWindowVariables({
              ...windowVariables,
              user: value,
              loading: true,
            })
          }
        />
        <Main>
          {[userData].map(
            (
              {
                avatar_url,
                name,
                login,
                bio,
                followers,
                following,
                company,
                location,
              },
              index
            ) => (
              <ProfileContainer key={index}>
                <div>
                  <img src={avatar_url} alt="Profile pic" />
                  <h1>{name}</h1>
                  <p className="login">{login}</p>
                  <p>{bio}</p>
                  <button
                    onClick={() =>
                      window
                        .open(
                          `https://github.com/login?return_to=%2F${userData.login}`,
                          "_blank"
                        )
                        .focus()
                    }
                  >
                    Follow
                  </button>
                  <div className="followers">
                    <FiUsers fontSize={16} />
                    <p>{followers} followers</p>
                    <p>{following} following</p>
                  </div>
                  {company && location && (
                    <div className="info">
                      <div>
                        <HiOutlineOfficeBuilding fontSize={16} />
                        <p>{company}</p>
                      </div>
                      <div>
                        <HiLocationMarker fontSize={16} />
                        <p>{location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </ProfileContainer>
            )
          )}
          <ContentContainer>
            <Menu>
              <h1
                onClick={() =>
                  setWindowVariables({ ...windowVariables, languages: true })
                }
                className={windowVariables.languages ? "active" : ""}
              >
                Languages
              </h1>
              <h1
                onClick={() =>
                  setWindowVariables({ ...windowVariables, languages: false })
                }
                className={!windowVariables.languages ? "active" : ""}
              >
                Repos
              </h1>
            </Menu>
            {windowVariables.languages && (
              <>
                <Title>{userData.login}'s languages</Title>
                <div className="languages">
                  {languages.length > 0 &&
                    languages.map((item, index) => (
                      <Card key={index}>
                        <p>{item}</p>
                      </Card>
                    ))}
                </div>
              </>
            )}
            {!windowVariables.languages && (
              <>
                <Title>{userData.login}'s repositories</Title>
                <div className="repositories">
                  {repositories.length > 0 &&
                    repositories.map(
                      ({ name, description, html_url }, index) => (
                        <Repository className="repo" key={index}>
                          <h1>{name}</h1>
                          <p>{description}</p>
                          <p>By: {userData.login}</p>
                          <button
                            onClick={() =>
                              window.open(html_url, "_blank").focus()
                            }
                          >
                            Check out {name}
                          </button>
                        </Repository>
                      )
                    )}
                </div>
              </>
            )}
          </ContentContainer>
        </Main>
      </MainContainer>
    </>
  );
}

export default MainPage;
