import { Env, SiteConfig } from './types';

export function getSiteConfig(env: Env, domain: string): SiteConfig | undefined {
    const configs: {[domain: string]: SiteConfig} = {
        'bin.prashansa.com.np': {
            name: "bin",
            bucket: env.BUCKET_bucketname,
            desp: {
                // Description For Footer on main Page
                '/': "Statically Compiled Binaries : https://github.com/Azathothas/Toolpacks",
                // aarch64 | arm64 Linux
                '/aarch64_arm64_Linux': "(aarch64 | arm64) Linux Binaries (WIP)",
                '/aarch64_arm64_Linux/BLAKE3SUM.txt': "B3SUM For ALL (aarch64 | arm64) Linux Binaries",
                '/aarch64_arm64_Linux/SHA256SUM.txt': "SHA256SUM For ALL (aarch64 | arm64) Linux Binaries",
                // arm64-v8a Android
                '/arm64_v8a_Android': "(aarch64 | arm64-v8a) Android Binaries (WIP)",
                '/arm64_v8a_Android/BLAKE3SUM.txt': "B3SUM For ALL (aarch64 | arm64-v8a) Android Binaries",
                '/arm64_v8a_Android/SHA256SUM.txt': "SHA256SUM For ALL (aarch64 | arm64-v8a) Android Binaries",
                // x86_64 Linux
                '/x86_64_Linux': "(x86_64 | amd_x86-64) Linux Binaries",
                '/x86_64_Linux/BLAKE3SUM.txt': "B3SUM For ALL (x86_64 | amd_x86-64) Linux Binaries",
                '/x86_64_Linux/SHA256SUM.txt': "SHA256SUM For ALL (x86_64 | amd_x86-64) Linux Binaries",
                // x64 Windows
                '/x64_Windows': "(x64 | 64 Bit) Windows Binaries (WIP)",
                '/x64_Windows/BLAKE3SUM.txt': "B3SUM For ALL (x64 | 64 Bit) Windows Binaries",
                '/x64_Windows/SHA256SUM.txt': "SHA256SUM For ALL (x64 | 64 Bit) Windows Binaries",
            },
            showPoweredBy: false, // Set to false to hide the "Powered by" information at footer

            /// [Optional] Legal information of your website
            /// Your local government (for example Mainland China) may requires you to put some legal info at footer
            /// and you can put it here.
            /// It will be treated as raw HTML.
            // legalInfo: "Legal information of your website",

            /// [Optional] favicon, should be a URL to **PNG IMAGE**. Default to Cloudflare R2's logo
            favicon: 'https://github.com/Azathothas/Toolpacks/assets/58171889/d226c553-1835-464c-8908-fe293d3aac3c',
        },
    };
    return configs[domain];
}