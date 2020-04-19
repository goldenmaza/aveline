import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

const Category = new GraphQLObjectType({
    name: 'Category',
    description: 'This represents a Category',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(category) {
                    return category.id;
                }
            },
            category: {
                type: GraphQLInt,
                resolve(category) {
                    return category.category;
                }
            },
            value: {
                type: GraphQLString,
                resolve(category) {
                    return category.value;
                }
            },
            label: {
                type: GraphQLString,
                resolve(category) {
                    return category.label;
                }
            }
        };
    }
});

export default Category;
