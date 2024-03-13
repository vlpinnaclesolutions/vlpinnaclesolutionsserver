import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sua-base-de-dados', 'seu-usuario', 'sua-senha', {
  host: 'localhost',
  dialect: 'mariadb',
});

export default sequelize;