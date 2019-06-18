import { StorageDestination, StorageService, TransferContentsRequest } from '..';
import { Observable } from 'rxjs';
import { Content } from '../../content';
import { EventsBusService } from '../../events-bus';
import { SharedPreferences } from '../../util/shared-preferences';
import { DbService } from '../../db';
import { DeviceInfo, StorageVolume } from '../../util/device';
import { SdkConfig } from '../../sdk-config';
import { FileService } from '../../util/file/def/file-service';
export declare class StorageServiceImpl implements StorageService {
    private eventsBusService;
    private sharedPreferences;
    private dbService;
    private deviceInfo;
    private fileService;
    private sdkConfig;
    private static readonly STORAGE_DESTINATION;
    private contentsToTransfer;
    private transferContentHandler;
    private lastTransferContentsRequest?;
    private currentStorageDestination;
    private availableStorageVolumes;
    constructor(eventsBusService: EventsBusService, sharedPreferences: SharedPreferences, dbService: DbService, deviceInfo: DeviceInfo, fileService: FileService, sdkConfig: SdkConfig);
    onInit(): Observable<undefined>;
    getStorageDestinationDirectoryPath(): string;
    cancelTransfer(): Observable<undefined>;
    getStorageDestination(): Observable<StorageDestination>;
    getStorageDestinationVolumeInfo(): Observable<StorageVolume>;
    getToTransferContents(): Observable<Content[]>;
    getTransferringContent(): Observable<Content | undefined>;
    retryCurrentTransfer(): Observable<undefined>;
    transferContents(transferContentsRequest: TransferContentsRequest): Observable<undefined>;
}
