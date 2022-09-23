import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  /** Which movies they appear in. */
  appearsIn: Array<Maybe<Episode>>;
  /** The friends of the character, or an empty list if they have none. */
  friends: Array<Maybe<Character>>;
  /** The id of the character */
  id?: Maybe<Scalars['String']>;
  /** The name of the character */
  name?: Maybe<Scalars['String']>;
};

/** A mechanical creature in the Star Wars universe. */
export type Droid = Character & {
  __typename?: 'Droid';
  /** Which movies they appear in. */
  appearsIn: Array<Maybe<Episode>>;
  /** The friends of the character, or an empty list if they have none. */
  friends: Array<Maybe<Character>>;
  /** The id of the character */
  id?: Maybe<Scalars['String']>;
  /** The name of the character */
  name?: Maybe<Scalars['String']>;
  /** The primary function of the droid. */
  primaryFunction?: Maybe<Scalars['String']>;
};

/** One of the films in the Star Wars Trilogy */
export enum Episode {
  /** Released in 1980. */
  Empire = 'EMPIRE',
  /** Released in 1983 */
  Jedi = 'JEDI',
  /** Released in 1977. */
  Newhope = 'NEWHOPE'
}

/** A humanoid creature in the Star Wars universe. */
export type Human = Character & {
  __typename?: 'Human';
  /** Which movies they appear in. */
  appearsIn: Array<Maybe<Episode>>;
  /** The friends of the character, or an empty list if they have none. */
  friends: Array<Maybe<Character>>;
  /** The home planet of the human, or null if unknown. */
  homePlanet?: Maybe<Scalars['String']>;
  /** The id of the character */
  id?: Maybe<Scalars['String']>;
  /** The name of the character */
  name?: Maybe<Scalars['String']>;
};

export enum MoreEpisodes {
  /** Released in 1980. */
  Empire = 'EMPIRE',
  /** Released in 1983 */
  Jedi = 'JEDI',
  /** Released in 1977. */
  Newhope = 'NEWHOPE',
  Other = 'OTHER'
}

export type Query = {
  __typename?: 'Query';
  getDroidById?: Maybe<Droid>;
  getHeroByEpisode?: Maybe<Character>;
  getHumanById?: Maybe<Human>;
};


export type QueryGetDroidByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetHeroByEpisodeArgs = {
  episode: Episode;
};


export type QueryGetHumanByIdArgs = {
  id: Scalars['String'];
};

export type GetHeroByEpisodeQueryVariables = Exact<{
  episode: Episode;
}>;


export type GetHeroByEpisodeQuery = { __typename?: 'Query', getHeroByEpisode?: { __typename?: 'Droid', id?: string | null, name?: string | null, appearsIn: Array<Episode | null>, friends: Array<{ __typename?: 'Droid', id?: string | null, name?: string | null } | { __typename?: 'Human', id?: string | null, name?: string | null } | null> } | { __typename?: 'Human', id?: string | null, name?: string | null, appearsIn: Array<Episode | null>, friends: Array<{ __typename?: 'Droid', id?: string | null, name?: string | null } | { __typename?: 'Human', id?: string | null, name?: string | null } | null> } | null };


export const GetHeroByEpisodeDocument = gql`
    query getHeroByEpisode($episode: Episode!) {
  getHeroByEpisode(episode: $episode) {
    id
    name
    friends {
      id
      name
    }
    appearsIn
  }
}
    `;

export function useGetHeroByEpisodeQuery(options: Omit<Urql.UseQueryArgs<GetHeroByEpisodeQueryVariables>, 'query'>) {
  return Urql.useQuery<GetHeroByEpisodeQuery, GetHeroByEpisodeQueryVariables>({ query: GetHeroByEpisodeDocument, ...options });
};