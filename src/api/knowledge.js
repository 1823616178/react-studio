import useAxios, {configure} from "axios-hooks";


/**
 * 获取知识分类
 * @param data
 */
export function getFirstTypeCountForHighSearch(data) {
    return useAxios({
        url: "/knowledge/commonApi/getFirstTypeCountForHighSearch",
        method: "post",
        data: data,
    })
}

export function advancedRetrievalParams(data) {
    return useAxios({
        url: "/commonApi/getKnowledgeCategory",
        method: "post",
        params: data
    })
}

/**
 * 获取知识人物列表
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getPersonalAPiList(data) {
    return useAxios({
        url: "/knowledgeApi/personalApi/list",
        method: "post",
        params: data
    })
}

/**
 * 获取知识人物列表请求对象
 * @param data
 * @returns {{method: string, params, url: string}}
 */
export function getPersonalAPiListParams(data) {
    return {
        url: "/knowledgeApi/personalApi/list",
        method: "post",
        params: data
    }
}

/**
 * 获取知识机构列表
 * @param data
 * @returns {{method: string, params, url: string}}
 */
export function getOrganizationApiList(data) {
    return {
        url: "/knowledgeApi/organizationApi/list",
        method: "post",
        params: data
    }
}

/**
 * 获取知识事件列表
 * @param data
 * @returns {{method: string, params, url: string}}
 */
export function getEventApiList(data) {
    return {
        url: "/knowledgeApi/eventApi/list",
        method: "post",
        params: data
    }
}

/**
 * 获取知识地理列表
 * @param data
 * @returns {{method: string, params, url: string}}
 */
export function getGeographicalApiList(data) {
    return {
        url: "/knowledgeApi/geographicalApi/list",
        method: "post",
        params: data
    }
}

/**
 * 获取知识物产列表
 * @param data
 * @returns {{method: string, params, url: string}}
 */
export function getProductApiList(data) {
    return {
        url: "/knowledgeApi/productApi/list",
        method: 'post',
        params: data
    }
}


/**
 * 获取A-Z可见字母
 * @param data
 * @returns {UseAxiosResult<any, any, any>}
 */
export function getInitialsInfo(data) {
    return useAxios({
        url: '/knowledgeApi/personalApi/getInitialsInfo',
        method: "post",
        params: data
    })
}

