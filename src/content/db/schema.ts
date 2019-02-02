import {DbConstants} from '../../db';

export namespace ContentEntry {
    export const TABLE_NAME = 'content';
    export const _ID = '_id';
    export const COLUMN_NAME_IDENTIFIER = 'identifier';
    export const COLUMN_NAME_SERVER_DATA = 'server_data';
    export const COLUMN_NAME_LOCAL_DATA = 'local_data';
    export const COLUMN_NAME_MIME_TYPE = 'mime_type';
    export const COLUMN_NAME_PATH = 'path';
    export const COLUMN_NAME_INDEX = 'search_index';
    export const COLUMN_NAME_VISIBILITY = 'visibility';   // Visibility could be Default or Parent
    export const COLUMN_NAME_SERVER_LAST_UPDATED_ON = 'server_last_updated_on';
    export const COLUMN_NAME_LOCAL_LAST_UPDATED_ON = 'local_last_updated_on';
    export const COLUMN_NAME_MANIFEST_VERSION = 'manifest_version';
    export const COLUMN_NAME_REF_COUNT = 'ref_count';
    export const COLUMN_NAME_CONTENT_STATE = 'content_state'; // 0 - Seen but not available (only serverData will be available),
    // 1 - Only spine, 2 - Artifact available
    export const COLUMN_NAME_CONTENT_TYPE = 'content_type';   // Content type could be story,
    // worksheet, game, collection, textbook.
    export const COLUMN_NAME_AUDIENCE = 'audience';   // learner, instructor
    export const COLUMN_NAME_PRAGMA = 'pragma';   // external, ads
    export const COLUMN_NAME_UID = 'uid';   // list of comma separated uid
    export const COLUMN_NAME_SIZE_ON_DEVICE = 'size_on_device';   // list of comma separated uid

    export interface SchemaMap {
        [_ID]: string;
        [COLUMN_NAME_IDENTIFIER]: string;
        [COLUMN_NAME_SERVER_DATA]: string;
        [COLUMN_NAME_LOCAL_DATA]: string;
        [COLUMN_NAME_MIME_TYPE]: string;
        [COLUMN_NAME_PATH]: string;
        [COLUMN_NAME_INDEX]: string;
        [COLUMN_NAME_VISIBILITY]: string;
        [COLUMN_NAME_SERVER_LAST_UPDATED_ON]: string;
        [COLUMN_NAME_LOCAL_LAST_UPDATED_ON]: string;
        [COLUMN_NAME_MANIFEST_VERSION]: string;
    }

    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS ' + TABLE_NAME + ' (' +
            ContentEntry._ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_IDENTIFIER + DbConstants.TEXT_TYPE + ' UNIQUE NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_SERVER_DATA + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_LOCAL_DATA + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MIME_TYPE + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_PATH + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_INDEX + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_VISIBILITY + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_SERVER_LAST_UPDATED_ON + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_LOCAL_LAST_UPDATED_ON + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MANIFEST_VERSION + DbConstants.TEXT_TYPE +
            ' )';
    };

    export const getDeleteEntry: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;
    };

    export const getAlterEntryForContentSize: (() => string) = () => {
        return 'ALTER TABLE ' + TABLE_NAME + ' ADD COLUMN ' + COLUMN_NAME_SIZE_ON_DEVICE + DbConstants.INT_TYPE + ' NOT NULL DEFAULT 0;';
    };

    export const getAlterEntryForPragma: (() => string) = () => {
        return 'ALTER TABLE ' + TABLE_NAME + ' ADD COLUMN ' + COLUMN_NAME_PRAGMA + DbConstants.TEXT_TYPE + ' DEFAULT \'\';';
    };

}

export namespace ContentAccessEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'content_marker';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_CONTENT_IDENTIFIER = 'identifier';
    export const COLUMN_NAME_EPOCH_TIMESTAMP = 'epoch_timestamp';
    export const COLUMN_NAME_DATA = 'data';
    export const COLUMN_NAME_EXTRA_INFO = 'extra_info';
    export const COLUMN_NAME_MARKER = 'marker';


    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS' + ContentMarkerEntry.TABLE_NAME + ' (' +
            ContentMarkerEntry._ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_UID + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CONTENT_IDENTIFIER + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_EPOCH_TIMESTAMP + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_DATA + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_EXTRA_INFO + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MARKER + DbConstants.INT_TYPE +
            ' )';
    };

    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;

    };
}

export namespace ContentFeedbackEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'feedback';
    export const COLUMN_NAME_CONTENT_ID = 'identifier';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_RATING = 'rating';
    export const COLUMN_NAME_COMMENTS = 'comments';
    export const COLUMN_NAME_CREATED_AT = 'created_at';


    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS' + TABLE_NAME + ' (' +
            _ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_CONTENT_ID + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_UID + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_RATING + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_COMMENTS + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CREATED_AT + DbConstants.INT_TYPE +
            ' )';
    };

    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;

    };
}


export namespace ContentMarkerEntry {

    export const _ID = '_id';
    export const TABLE_NAME = 'content_marker';
    export const COLUMN_NAME_UID = 'uid';
    export const COLUMN_NAME_CONTENT_IDENTIFIER = 'identifier';
    export const COLUMN_NAME_EPOCH_TIMESTAMP = 'epoch_timestamp';
    export const COLUMN_NAME_DATA = 'data';
    export const COLUMN_NAME_EXTRA_INFO = 'extra_info';
    export const COLUMN_NAME_MARKER = 'marker';


    export const getCreateEntry: (() => string) = () => {
        return 'CREATE TABLE IF NOT EXISTS' + ContentMarkerEntry.TABLE_NAME + ' (' +
            ContentMarkerEntry._ID + ' INTEGER PRIMARY KEY,' +
            COLUMN_NAME_UID + DbConstants.TEXT_TYPE + ' NOT NULL' + DbConstants.COMMA_SEP +
            COLUMN_NAME_CONTENT_IDENTIFIER + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_EPOCH_TIMESTAMP + DbConstants.INT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_DATA + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_EXTRA_INFO + DbConstants.TEXT_TYPE + DbConstants.COMMA_SEP +
            COLUMN_NAME_MARKER + DbConstants.INT_TYPE +
            ' )';
    };

    export const deleteTable: (() => string) = () => {
        return 'DROP TABLE IF EXISTS ' + TABLE_NAME;

    };
}
