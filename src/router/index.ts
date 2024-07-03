type RouteDataSchema = {
  [name: string]: {
    name: string;
    path: string;
  };
};

type PathParamsSchema = {
  [name: string]: string | number;
};

type RouteParamsSchema = {
  isParams: boolean;
  params: PathParamsSchema;
};

export const routeData: RouteDataSchema = {
  home: { name: 'home', path: '/' },
  draw: { name: 'draw', path: '/draw' },
  user: { name: 'user', path: '/user/[account]' },
  question: { name: 'question', path: '/question' },
};

export const getUrlPath = (template: string, params: PathParamsSchema): string => {
  let newPath = '';
  const regex = /\[([^\]]+)\]/g;
  const matches = template.match(regex);

  if (matches) {
    for (let match of matches) {
      const paramName = match.slice(1, -1); // 去掉方括號
      if (params.hasOwnProperty(paramName)) {
        newPath = template.replace(match, String(params[paramName]));
      } else {
        newPath = template.replace(match, 'path_error');
      }
    }
  }

  return newPath;
};

export const getUrlParams = (path: string, params: PathParamsSchema): string => {
  let baseURL = path;
  let query = '?';
  const attribute = Object.keys(params);
  if (attribute.length > 0) {
    attribute.forEach((key, index) => {
      const value = params[key];
      let str = `${key}=${value}`;
      if (attribute.length > 1 && attribute.length > index + 1) str += '&';
      query += str;
    });
    baseURL += query;
  }

  return baseURL;
};

export const getRouteTxt = (pathName: string, params?: RouteParamsSchema | null): string => {
  const path = routeData?.[pathName]?.path;
  const currentPath = path ?? `/${pathName}`;

  if (params) {
    if (params.isParams) return getUrlParams(currentPath, params.params);
    else return getUrlPath(currentPath, params.params);
  }

  return currentPath;
};
