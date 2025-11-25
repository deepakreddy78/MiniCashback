import User from "../model/User.model.js";
import Store from "../model/Store.model.js"
import Cashback from "../model/Cashback.model.js";


export const purchaseItems = async (req, res) => {
    const { name, storeIt, purchaseAmount } = req.body;
    try {
        const user = new User();
        user.name = name;
        await user.save()

        const store = new Store();
        store.userId = user._id;
        store.items = storeIt;
        store.purchaseAmount = purchaseAmount;
        await store.save();

        const cashback = new Cashback();
        cashback.userId = user._id;
        await cashback.save();

        const amountAfterCashback = purchaseAmount - (purchaseAmount * cashback.percentage) / 100;
        user.amountAfterCashback = amountAfterCashback;
        await user.save();
        return res.status(200).json({
            message: "Purchase successful",
            data: {
                user,
                store,
                cashback
            }
        })
    }

    catch (err) {
        console.log("Error while purchasing items", err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }

}


