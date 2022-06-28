import { NavLink, useLocation } from 'react-router-dom';
import jinLogo from '../../data/img/logo/jinhub.webp';
import { Paths } from './constants';
import { useTranslation } from 'react-i18next';

export function Nav() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0583D2] flex items-center">
      <nav className="flex items-center p-4 mx-auto">
        <a
          href="https://github.com/orangegarage"
          target="_blank"
          rel="noreferrer"
          className="lg:mr-10 mr-5"
        >
          <img src={jinLogo} alt="jinLogo" className="h-10 w-10"></img>
        </a>
        <div className="text-#61dafb text-lg flex justify-items-center">
          <Tab path={Paths.Home} routeName={t('nav.Home')} />
          <Tab path={Paths.Quiz} routeName={t('nav.Quiz')} />
          <Tab path={Paths.All} routeName={t('nav.All')} />
        </div>
      </nav>
    </div>
  );
}

function Tab(props: { path: Paths; routeName: string }) {
  let location = useLocation();
  let classNames =
    'block lg:inline-block lg:mr-7 mr-2 font-bold px-3 py-2 rounded-md hover:text-white hover:bg-[#055e96] transition-colors duration-500';
  if (location.pathname === props.path) {
    classNames += ' bg-[#055e96] text-white';
  }
  return (
    <NavLink to={props.path} className={classNames}>
      {props.routeName}
    </NavLink>
  );
}
