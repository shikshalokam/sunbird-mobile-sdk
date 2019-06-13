// @ts-ignore
declare var buildconfigreader: {
    getBuildConfigValue: (packageName: string, property: string, success:
        (callbackUrl: string) => void, error: (error: string) => void) => void;

    getBuildConfigValues: (packageName: string, success:
        (callbackUrl: string) => void, error: (error: string) => void) => void;

    rm: (directoryPath: string, direcoryToBeSkipped: string, success:
        (callbackUrl: boolean) => void, error: (error: boolean) => void) => void;

    copyDirectory: (sourceDirectory: string, destinationDirectory: string,
                    onSuccess: () => void, onError: (error: any) => void) => void;

    createDirectories: (parentDirectoryPath: string, listOfFolder: string[], success:
        (callbackUrl: any) => void, error: (error: string) => void) => void;

    writeFile: (fileMapList: any[], success:
        (callbackUrl: void) => void, error: (error: string) => void) => void;

    getMetaData: (fileMapList: any[], success:
        (callbackUrl: any) => void, error: (error: string) => void) => void;

    getDeviceSpec: (callback: (deviceSpec: any) => void) => void;

    getAvailableInternalMemorySize: (success:
                                         (callbackUrl: string) => void, error: (error: string) => void) => void;

    getStorageVolumes: (success: (storageVolume: {
        availableSize: number;
        totalSize: number;
        state: string;
        path: string;
        isRemovable: boolean;
    }[]) => void, error: (error: any) => void) => void;
};
