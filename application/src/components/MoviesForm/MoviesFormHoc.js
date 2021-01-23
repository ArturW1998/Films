import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { directorsQuery } from '../DirectorsTable/queries';
import { moviesQuery } from '../MoviesTable/queries';
import { addMovieMutation } from './mutations';
import { directorsNameQuery } from './queries';

import { styles } from './styles';

const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }, { query: directorsQuery }],
        }),
    }),
});

export default compose(withStyles(styles), withGraphqlAdd, graphql(directorsNameQuery));
