const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://usuario_admin:senha_ficticia_dev@clusterapi.mongodb.net/devDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha_ficticia_dev',
                jwt_expires_in: '7d',
            };

        case 'hml':
            return {
                bd_string: 'mongodb+srv://usuario_admin:senha_ficticia_hml@clusterapi.mongodb.net/hmlDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha_ficticia_hml',
                jwt_expires_in: '7d',
            };

        case 'prod':
            return {
                bd_string: 'mongodb+srv://usuario_admin:senha_ficticia_prod@clusterapi.mongodb.net/prodDatabase?retryWrites=true&w=majority',
                jwt_pass: 'senha_ficticia_prod',
                jwt_expires_in: '7d',
            };
    }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
