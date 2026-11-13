
const protect = (req, res, next) => {

    if (!req.body.ename) {
        return res.json({ error: "Employee name not found" });
    }

    if (!req.body.department) {
        return res.json({ error: "Employee department not found" });
    }

    if (!req.body.salary) {
        return res.json({ error: "Employee salary not found" });
    }

    next();
};

export default protect;
