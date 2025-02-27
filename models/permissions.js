const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
    menuName: {
        type: String,
        required: [true, "menu name required"],

    },

    description: {
        type: String,
        maxLength: [50, "cannot be more than 50 characters"]
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Roles"

    },

    isAccessible: {
        type: Boolean,
        default: false

    },

    isActive: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Permissions", permissionSchema);