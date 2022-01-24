export default {
    methods: {
        confirmValidator: function({ password, confirm }) {
            return password === confirm;
        }
    }
};
