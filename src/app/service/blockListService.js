const BlockListRepository = require('../repository/blockListRepository')

class BlockListService {
    async getBlockList(){
        const result = await BlockListRepository.getBlockList()
        return result
    }
    async updateBlockList(payload){
        const result = await BlockListRepository.updateBlockList(payload)
        return result
    }
}

module.exports = new BlockListService()