class DepositService {
    constructor(DepositModel) {
        this.Deposit = DepositModel;
    }

    //--------------------------------------------------------------------------------------------------//

    async create(movimento, productId, qtd) {
        try {
            const newDeposit = await this.Deposit.create({ movimento, ProductId: productId, qtd });
            return newDeposit;
        } catch (error) {
            throw error;
        }
    }

    //--------------------------------------------------------------------------------------------------//

    async findAllDeposits() {
        try {
            const deposits = await this.Deposit.findAll();
            return deposits;
        } catch (error) {
            throw error;
        }
    }

    //--------------------------------------------------------------------------------------------------//

    async findDepositById(id) {
        try {
            const deposit = await this.Deposit.findOne({ where: { id } });
            return deposit;
        } catch (error) {
            throw error;
        }
    }
    //--------------------------------------------------------------------------------------------------//
    
}

module.exports = DepositService;
