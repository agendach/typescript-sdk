'use strict';
import { ShopifySubscription } from "./ShopifySubscription";
import { ShopifySubscriptionAddress } from "./ShopifySubscriptionAddress";
import { ShopifySubscriptionBillingIntervalUnit } from "./ShopifySubscriptionBillingIntervalUnit";
import { ShopifySubscriptionVersionItem } from "./ShopifySubscriptionVersionItem";
import { ShopifySubscriptionVersionState } from "./ShopifySubscriptionVersionState";
import { ShopifySubscriptionWeekday } from "./ShopifySubscriptionWeekday";


class ShopifySubscriptionVersion {

        /**
        * 
        */
    'billingAddress'?: ShopifySubscriptionAddress;

        /**
        * 
        */
    'billingDayOfMonth'?: number;

        /**
        * 
        */
    'billingIntervalAmount'?: number;

        /**
        * 
        */
    'billingIntervalUnit'?: ShopifySubscriptionBillingIntervalUnit;

        /**
        * 
        */
    'billingWeekday'?: ShopifySubscriptionWeekday;

        /**
        * 
        */
    'createdBy'?: number;

        /**
        * 
        */
    'createdOn'?: Date;

        /**
        * 
        */
    'currency'?: string;

        /**
        * 
        */
    'dischargedBy'?: number;

        /**
        * 
        */
    'dischargedOn'?: Date;

        /**
        * The ID is the primary key of the entity. The ID identifies the entity uniquely.
        */
    'id'?: number;

        /**
        * 
        */
    'items'?: Array<ShopifySubscriptionVersionItem>;

        /**
        * The linked space id holds the ID of the space to which the entity belongs to.
        */
    'linkedSpaceId'?: number;

        /**
        * 
        */
    'maximalBillingCycles'?: number;

        /**
        * 
        */
    'maximalSuspendableCycles'?: number;

        /**
        * 
        */
    'minimalBillingCycles'?: number;

        /**
        * 
        */
    'paymentGateway'?: string;

        /**
        * 
        */
    'shippingAddress'?: ShopifySubscriptionAddress;

        /**
        * 
        */
    'shippingRate'?: string;

        /**
        * 
        */
    'shop'?: number;

        /**
        * 
        */
    'state'?: ShopifySubscriptionVersionState;

        /**
        * 
        */
    'storeOrderConfirmationEmailEnabled'?: boolean;

        /**
        * 
        */
    'subscriberSuspensionAllowed'?: boolean;

        /**
        * 
        */
    'subscription'?: ShopifySubscription;

        /**
        * 
        */
    'terminationBillingCycles'?: number;

        /**
        * 
        */
    'token'?: number;

        /**
        * The version number indicates the version of the entity. The version is incremented whenever the entity is changed.
        */
    'version'?: number;


    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    
        {
        "name": "billingAddress",
        "baseName": "billingAddress",
        "type": "ShopifySubscriptionAddress"
        },
        
        {
        "name": "billingDayOfMonth",
        "baseName": "billingDayOfMonth",
        "type": "number"
        },
        
        {
        "name": "billingIntervalAmount",
        "baseName": "billingIntervalAmount",
        "type": "number"
        },
        
        {
        "name": "billingIntervalUnit",
        "baseName": "billingIntervalUnit",
        "type": "ShopifySubscriptionBillingIntervalUnit"
        },
        
        {
        "name": "billingWeekday",
        "baseName": "billingWeekday",
        "type": "ShopifySubscriptionWeekday"
        },
        
        {
        "name": "createdBy",
        "baseName": "createdBy",
        "type": "number"
        },
        
        {
        "name": "createdOn",
        "baseName": "createdOn",
        "type": "Date"
        },
        
        {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
        },
        
        {
        "name": "dischargedBy",
        "baseName": "dischargedBy",
        "type": "number"
        },
        
        {
        "name": "dischargedOn",
        "baseName": "dischargedOn",
        "type": "Date"
        },
        
        {
        "name": "id",
        "baseName": "id",
        "type": "number"
        },
        
        {
        "name": "items",
        "baseName": "items",
        "type": "Array<ShopifySubscriptionVersionItem>"
        },
        
        {
        "name": "linkedSpaceId",
        "baseName": "linkedSpaceId",
        "type": "number"
        },
        
        {
        "name": "maximalBillingCycles",
        "baseName": "maximalBillingCycles",
        "type": "number"
        },
        
        {
        "name": "maximalSuspendableCycles",
        "baseName": "maximalSuspendableCycles",
        "type": "number"
        },
        
        {
        "name": "minimalBillingCycles",
        "baseName": "minimalBillingCycles",
        "type": "number"
        },
        
        {
        "name": "paymentGateway",
        "baseName": "paymentGateway",
        "type": "string"
        },
        
        {
        "name": "shippingAddress",
        "baseName": "shippingAddress",
        "type": "ShopifySubscriptionAddress"
        },
        
        {
        "name": "shippingRate",
        "baseName": "shippingRate",
        "type": "string"
        },
        
        {
        "name": "shop",
        "baseName": "shop",
        "type": "number"
        },
        
        {
        "name": "state",
        "baseName": "state",
        "type": "ShopifySubscriptionVersionState"
        },
        
        {
        "name": "storeOrderConfirmationEmailEnabled",
        "baseName": "storeOrderConfirmationEmailEnabled",
        "type": "boolean"
        },
        
        {
        "name": "subscriberSuspensionAllowed",
        "baseName": "subscriberSuspensionAllowed",
        "type": "boolean"
        },
        
        {
        "name": "subscription",
        "baseName": "subscription",
        "type": "ShopifySubscription"
        },
        
        {
        "name": "terminationBillingCycles",
        "baseName": "terminationBillingCycles",
        "type": "number"
        },
        
        {
        "name": "token",
        "baseName": "token",
        "type": "number"
        },
        
        {
        "name": "version",
        "baseName": "version",
        "type": "number"
        }        
    ];

    static getAttributeTypeMap() {
        return ShopifySubscriptionVersion.attributeTypeMap;
    }
}

export { ShopifySubscriptionVersion }
