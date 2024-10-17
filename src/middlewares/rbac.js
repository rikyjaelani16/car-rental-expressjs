const { equal } = require("joi");
const ValidationError = require("../helpers/errors/validation");
const AccessModel = require("../models/access");
const access = new AccessModel();
function rbac(menuParam, accessParams) {
  return async (req, res, next) => {
    const role_id = req.user.role_id;
    if (role_id === 1) return next();
    const accesByRole = await access.getOne({
      where: {
        role_id,
        grant: {
          path: [accessParams],
          equals: true,
        },
        menu: {
          is: {
            name: menuParam,
          },
        },
      },
    });
    console.log(accesByRole);
    if (!accesByRole)
      next(new ValidationError("You don't have access to this menu"));
    return next();
  };
}
module.exports = rbac;
