import { DataTypes } from 'sequelize'
import { sequilize } from '../db'

const Comments = sequilize.define(
    "comment",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
        },
        avatarName: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
    timestamps: true
})

export const ModelComments = Comments